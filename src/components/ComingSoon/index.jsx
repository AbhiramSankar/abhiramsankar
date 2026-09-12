import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faFileLines,
  faFilePdf,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../UI/AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUIStore } from '../../store/ui'

const ComingSoon = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const comingSoon1Array = 'Under '.split('')
  const comingSoon2Array = 'Development'.split('')

  const resumeLink = useUIStore((state) => state.resumeLink)
  const portfolioLink = useUIStore((state) => state.portfolioLink)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 5100)
  }, [])
  return (
    <div className="comingSoon">
      <div className="textZone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={comingSoon1Array}
            index={5}
          />
          {/* <br/> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={comingSoon2Array}
            index={5}
          />
        </h1>
        <div className="sectionP">
          <p>Thanks for exploring!</p>
          <p>This page is still being developed.</p>
          <p>
            In the meantime, feel free to check out my resume or CV to learn
            more about my experience.
          </p>
        </div>
        <div className="homeButtons">
          {/* <a
            to="/about-me"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="buttonText">MORE ABOUT ME</span>
          </a> */}
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
      <FontAwesomeIcon icon={faLaptopCode} className="comingSoonIcon" />
    </div>
  )
}

export default ComingSoon
