import { useUIStore } from '../../store/ui'
import LogoAS from '../../assets/img/logo6.png'
import './index.scss'

const Loader = () => {
  const isLoading = useUIStore((state) => state.isLoading)

  return (
    <div className={`loaderContainer ${isLoading ? 'entryAnim' : 'exitAnim'}`}>
      <img className="mainLogo" src={LogoAS} alt="mainLogo" />
      <div className='loaderText'>Abhiram is Searching...</div>
      <span className="loader"></span>
    </div>
  )
}

export default Loader
