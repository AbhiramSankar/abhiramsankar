import './index.scss'

const AnimatedLetters = (props) => {
  return (
    <span>
      {props.strArray.map((char, i) => (
        <span key={char + i} className={`${props.letterClass} _${i + props.index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
