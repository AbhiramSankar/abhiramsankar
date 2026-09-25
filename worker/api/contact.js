const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send'

const handleContact = (req, env) => {
  return req
    .json()
    .then((body) => {
      const { name, email, phone, sub, msg } = body
      if (!name?.trim() || !email?.trim() || !sub?.trim() || !msg?.trim()) {
        return Response.json(
          {
            success: false,
            msg: 'A few required fields are still missing. Mind filling them in?',
          },
          {
            status: 400,
          }
        )
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        return Response.json(
          {
            success: false,
            msg: 'That email address looks a little suspicious. Mind checking it once more?',
          },
          {
            status: 400,
          }
        )
      }

      console.log('Name:', name)
      console.log('Email:', email)
      console.log('Subject:', sub)

      const emailData = {
        service_id: env.EMAILJS_SERVICE_ID,
        template_id: env.EMAILJS_TEMPLATE_ID,
        user_id: env.EMAILJS_PUBLIC_KEY,
        template_params: {
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || 'Not provided',
          subject: sub.trim(),
          message: msg.trim(),
        },
      }

      if (env.EMAILJS_PRIVATE_KEY) {
        emailData.accessToken = env.EMAILJS_PRIVATE_KEY
      }

      return fetch(EMAILJS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
    })
    .then((emailRes) => {
      if (!emailRes.ok) {
        return emailRes.json().then((res) => {
          console.error('EmailJS error:', emailRes.status, res.msg)
          const error = new Error(res.msg)
          error.status =
            emailRes.status === 429 || emailRes.status === 400
              ? emailRes.status
              : 502
          throw error
        })
      }

      return Response.json(
        {
          success: true,
          msg: 'Message has been sent successfully. I’ll get back to you soon.',
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      )
    })
    .catch((e) => {
    //   console.error('Contact API error:', e.status)
      let errorMessage =
        'Something broke somewhere between here and the inbox. Please try again.'
      if (e.status === 400) {
        errorMessage = e.msg
      } else if (e.status === 429) {
        errorMessage =
          'Too many requests too quickly. Even APIs need a coffee break — try again in a moment.'
      }
      console.log(e.msg, e.status)
      return Response.json(
        {
          success: false,
          msg: errorMessage,
        },
        {
          status: e.status || 500,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      )
    })
}

export default handleContact
