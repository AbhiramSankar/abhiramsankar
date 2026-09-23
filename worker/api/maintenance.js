const maintenanceUnlocked = (req, env) => {
  return req
    .json()
    .then(({ pwd }) => {
      if (!pwd) {
        return Response.json(
          {
            success: false,
            msg: 'Nice try... but even the developer has to enter a password.',
          },
          {
            status: 400,
            headers: {
              'Cache-control': 'no-store',
            },
          }
        )
      }

      const isValid = pwd === env.CONSTRUCTION_PWD

      if (isValid) {
        return Response.json(
          {
            success: true,
            msg: 'Welcome back, developer. The unfinished parts are now your problem again. Try not to break anything.',
          },
          {
            status: 200,
            headers: {
              'Cache-control': 'no-store',
            },
          }
        )
      } else {
        return Response.json(
          {
            success: false,
            msg: "Uh oh... either you're not the developer, or you forgot the password. And there is no admin to contact. You are supposed to be the admin.",
          },
          {
            status: 401,
            headers: {
              'Cache-control': 'no-store',
            },
          }
        )
      }
    })
    .catch(() => {
      return Response.json(
        {
          success: false,
          msg: "Invalid request. Did you break your own endpoint?",
        },
        {
          status: 400,
          headers: {
            'Cache-control': 'no-store',
          },
        }
      )
    })
}

export default maintenanceUnlocked
