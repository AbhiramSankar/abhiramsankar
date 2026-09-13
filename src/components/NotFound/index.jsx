import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faExclamationTriangle,
  faFileLines,
  faFilePdf,
  faHome,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../UI/AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUIStore } from '../../store/ui'

const NotFound = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const notFound1Array = '404'.split('')
  const notFound2Array = ' - '.split('')
  const notFound3Array = 'Not '.split('')
  const notFound4Array = 'Found'.split('')

  const resumeLink = useUIStore((state) => state.resumeLink)
  const portfolioLink = useUIStore((state) => state.portfolioLink)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 5100)
  }, [])
  return (
    <div className="notFound">
      <div className="textZone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={notFound1Array}
            index={5}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={notFound2Array}
            index={5}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={notFound3Array}
            index={5}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={notFound4Array}
            index={5}
          />
        </h1>
        <div className="sectionP">
          <p>How did you end up getting here?</p>
          <p>Looks like you've wandered somewhere that doesn't exist.</p>
          <p>
            You can head back home, or check out my resume and full CV to learn
            more about my work and experience.
          </p>
        </div>
        <div className="homeButtons">
          <Link
            to="/"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="buttonText">BACK TO HOME</span>
          </Link>
          <a
            to={resumeLink}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileLines} />
            <span className="buttonText">QUICK OVERVIEW</span>
          </a>
          <a
            to={portfolioLink}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span className="buttonText">VIEW FULL CV</span>
          </a>
          {/* <a
            to="/contact-me"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="buttonText">CONTACT ME</span>
          </a> */}
        </div>
      </div>
      <div className="notFoundIconWrapper">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="notFoundIcon"
        />
      </div>
    </div>
  )
}

export default NotFound
