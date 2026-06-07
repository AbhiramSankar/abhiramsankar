import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFileLines, faFilePdf, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const comingSoon1Array = 'Under '.split('')
  const comingSoon2Array = 'Development'.split('')
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
              {/* <Link to="/about-me" className="button">
                <FontAwesomeIcon icon={faUser} />
                <span className="buttonText">MORE ABOUT ME</span>
              </Link> */}
              <Link to="https://drive.google.com/file/d/1jkeKmpAYfCwkLRUQpkhisGjvesT8Pmed/view?usp=sharing" className="button">
                <FontAwesomeIcon icon={faFileLines} />
                <span className="buttonText">QUICK OVERVIEW</span>
              </Link>
              <Link to="https://drive.google.com/file/d/1GvY2gYy4T-37csHoCPM1Gk9pMBDUWrfX/view?usp=sharing" className="button">
                <FontAwesomeIcon icon={faFilePdf} />
                <span className="buttonText">VIEW FULL CV</span>
              </Link>
              {/* <Link to="/contact-me" className="button">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="buttonText">CONTACT ME</span>
              </Link> */}
            </div>
      </div>
      <FontAwesomeIcon icon={faLaptopCode} className="comingSoonIcon" />
    </div>
  )
}

export default ComingSoon
