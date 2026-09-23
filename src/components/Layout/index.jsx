import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../UI/Sidebar'
import './index.scss'
import { useEffect, useState } from 'react'
import { useUIStore } from '../../store/ui'
import Loader from '../UI/Loader'
import { ToastContainer, toast, Slide } from 'react-toastify'

const EXIT_MS = 1500

const Layout = () => {
  let location = useLocation()

  const isLoading = useUIStore((state) => state.isLoading)
  const setLoading = useUIStore((state) => state.setLoading)
  const notifyContent = useUIStore((state) => state.notifyContent)
  const setNotifyContent = useUIStore((state) => state.setNotifyContent)
  const sectionCount = useUIStore(
    (state) => state.sectionCount[location.pathname]
  )

  const [showOutlet, setShowOutlet] = useState(true)

  const notify = (msg, type) => {
    switch (type) {
      case 'info':
        toast.info(msg, {
          onClose: () => {
            setNotifyContent(false)
          },
        })
        break
      case 'success':
        toast.success(msg, {
          onClose: () => {
            setNotifyContent(false)
          },
        })
        break
      case 'warn':
        toast.warn(msg, {
          onClose: () => {
            setNotifyContent(false)
          },
        })
        break
      case 'error':
        toast.error(msg, {
          onClose: () => {
            setNotifyContent(false)
          },
        })
        break
      default:
        toast(msg, {
          onClose: () => {
            setNotifyContent(false)
          },
        })
    }
  }

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

  useEffect(() => {
    if (notifyContent) {
      notify(notifyContent.msg, notifyContent.type)
    }
  }, [notifyContent])

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
      <ToastContainer
        className="notifyToast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  )
}

export default Layout
