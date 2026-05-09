import './index.scss'
import LogoA from '../../assets/img/LogoA.png'
import LogoS from '../../assets/img/LogoS.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
// import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faFile,
  faFileLines,
  faFilePdf,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const helloArray = 'Hello.'.split('')
  const iAmArray = "I'm".split('')
  const firstNameArray = 'bhiram'.split('') //['b', 'h', 'i', 'r', 'a', 'm']
  const lastNameArray = 'ankar,'.split('') //['a', 'n', 'k', 'a', 'r', ',']
  const jobArray = 'Full-Stack Developer.'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 5100)
  }, [])

  return (
    <div className={`container`}>
      <section className="homePage">
        <div className="textZone">
          <h1>
            {/* <span className={letterClass}>H</span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              index={7}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={iAmArray}
              index={14}
            />
            <img src={LogoA} alt="initials" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstNameArray}
              index={18}
            />
            <img src={LogoS} alt="initials" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              index={24}
            />
            <div>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                index={31}
              />
            </div>
          </h1>
          <h2>
            Building web applications, <br />
            with a growing focus on game development. | <br />
            Master’s Graduate — Ontario Tech University | <br />
            Bachelor’s — National Institute of Technology Puducherry
          </h2>
          <div className="homeButtons">
            {/* <Link to="/about-me" className="button">
                <FontAwesomeIcon icon={faUser} />
                <span className="buttonText">MORE ABOUT ME</span>
              </Link> */}
            <Link
              to="https://drive.google.com/file/d/1k1nCtfcvkcDfCVEcozWQf7oD3_apq6jt/view?usp=sharing"
              className="button"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className="buttonText">QUICK OVERVIEW</span>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1SHSxkKDgMHI54W9rFmT8raK2xoxK_bW_/view?usp=sharing"
              className="button"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              <span className="buttonText">VIEW FULL CV</span>
            </Link>
            {/* <Link to="/contact-me" className="button">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="buttonText">CONTACT ME</span>
              </Link> */}
          </div>
        </div>
        <Logo />
      </section>
    </div>
  )
}

export default Home
