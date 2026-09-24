import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import MaintenanceGate from './components/UI/MaintenanceGate'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MaintenanceGate page="home">
                <Home />
              </MaintenanceGate>
            }
          />
          <Route
            path="about-me"
            element={
              <MaintenanceGate page="about">
                <About />
              </MaintenanceGate>
            }
          />
          <Route
            path="my-work"
            element={
              <MaintenanceGate page="work">
                <Work />
              </MaintenanceGate>
            }
          />
          <Route
            path="contact-me"
            element={
              <MaintenanceGate page="contact">
                <Contact />
              </MaintenanceGate>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
