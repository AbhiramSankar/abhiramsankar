import { useEffect, useState } from 'react'
import AnimatedLetters from '../UI/AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const contact1Array = 'Contact '.split('')
  const contact2Array = 'Me'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 2000)
  }, [])
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
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone (optional)" />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              type="text"
              name="message"
              placeholder="Enter your message here"
              required
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane}/>
              <span className="buttonText">SEND</span>
            </button>
          </form>
        </div>
      </div>
      <div className="map"></div>
    </div>
  )
}

export default Contact
