import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faFileLines,
  faFilePdf,
  faHome,
  faPersonDigging,
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
          <p>Thanks for stopping by!</p>

          <p>
            This page is still under construction. I'm currently building,
            testing, and refining this section of my portfolio.
          </p>

          <p>
            In the meantime, you can head back home or check out my resume and
            full CV to explore more of my work and experience.
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
      <div className="comingSoonIconWrapper">
        <FontAwesomeIcon icon={faPersonDigging} className="comingSoonIcon" />
      </div>
    </div>
  )
}

export default ComingSoon
