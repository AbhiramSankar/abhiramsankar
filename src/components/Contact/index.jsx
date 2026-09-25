import { useEffect, useState } from 'react'
import AnimatedLetters from '../UI/AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useUIStore } from '../../store/ui'
import { handleContact } from '../../services/apiStore'
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const [formStatus, setFormStatus] = useState(null)
  const [ontario, setOntario] = useState(null)

  const setNotifyContent = useUIStore((state) => state.setNotifyContent)

  const contact1Array = 'Contact '.split('')
  const contact2Array = 'Me'.split('')
  const position = [43.90, -78.86]
  const mapBounds = [
    [41.6, -95.2], // southwest
    [56.9, -74.3], // northeast
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 2000)
  }, [])

  useEffect(() => {
    if (formStatus) {
      if (formStatus.status == 'success') {
        setNotifyContent({
          msg: formStatus.msg,
          type: 'success',
        })
      } else {
        setNotifyContent({
          msg: formStatus.msg,
          type: 'error',
        })
      }
    }
  }, [formStatus])

  useEffect(() => {
    fetch('/maps/ontario.geojson')
      .then((response) => response.json())
      .then((data) => {
        setOntario(data)
      })
      .catch((error) => {
        console.error('Unable to load Ontario map:', error)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      sub: formData.get('subject'),
      msg: formData.get('message'),
    }

    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.sub.trim() ||
      !data.msg.trim()
    ) {
      setFormStatus({
        status: 'failed',
        msg: 'A few required fields are still missing. Mind filling them in?',
      })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim())) {
      setFormStatus({
        status: 'failed',
        msg: 'That email address looks a little suspicious. Mind checking it once more?',
      })
      return
    }

    setFormStatus({ status: 'loading' })

    handleContact(data)
      .then((res) => {
        setFormStatus({
          status: res.success ? 'success' : 'failed',
          msg: res.msg,
        })
        form.reset()
      })
      .catch((e) => {
        setFormStatus({
          status: 'failed',
          msg: e.response?.data ? e.response?.data.msg : 'Something went wrong',
        })
      })
  }
  return (
    <div className="contact">
      <div className="textZone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contact1Array}
            index={5}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contact2Array}
            index={5}
          />
        </h1>
        <div className="sectionP">
          <p>
            I’m always open to discussing full-time roles, contract
            opportunities, and freelance projects, especially those involving
            ambitious ideas, challenging problems, or meaningful products. If
            you have an opportunity, project, question, or just want to connect,
            don’t hesitate to reach out using the form below.
          </p>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit} noValidate>
            <input type="text" name="name" placeholder="Name" required />
            <div className="inputWrapper">
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone (optional)" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Enter your message here"
              required
            />
            <button
              type="submit"
              className={formStatus?.status == 'loading' ? 'loadBtn' : ''}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="buttonText">
                {formStatus?.status == 'loading' ? 'SENDING...' : 'SEND'}
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="contactInfo">
        <div></div>
        <div className="mapWrapper">
          <MapContainer
            center={position}
            zoom={7}
            minZoom={5}
            maxZoom={15}
            maxBounds={mapBounds}
            maxBoundsViscosity={1}
          >
            <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Based in Oshawa, Ontario</Popup>
            </Marker>
            <Circle 
              center={position}
              radius={100000}
              pathOptions={{
                fillOpacity: 0.12,
                weight: 2
              }}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Contact
