import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import { useEffect, useState } from 'react'
import { useUIStore } from '../../store/ui'
import Loader from '../Loader'

const EXIT_MS = 1500

const Layout = () => {
  let location = useLocation()

  const isLoading = useUIStore((state) => state.isLoading)
  const setLoading = useUIStore((state) => state.setLoading)
  const sectionCount = useUIStore(
    (state) => state.sectionCount[location.pathname]
  )

  const [showOutlet, setShowOutlet] = useState(true)

  useEffect(() => {
    setShowOutlet(false)
    setLoading(true)

    const startExit = setTimeout(() => {
      setLoading(false)
    }, 1500)

    const reveal = setTimeout(() => {
      setShowOutlet(true)
    }, 1500 + EXIT_MS)

    return () => {
      clearTimeout(startExit)
      clearTimeout(reveal)
    }
  }, [location, setLoading])

  return (
    <div className="rootContainer">
      <Sidebar />
      <div className={`page`}>
        {showOutlet ? (
          <div
            className={`outletContainer ${
              sectionCount === 0 || sectionCount % 2 !== 0
                ? 'tagThemeRed'
                : 'tagThemeWhite'
            }`}
          >
            <Outlet />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Layout
