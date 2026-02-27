import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<About />} />
          <Route path='my-work' element={<Work />} />
          <Route path='contact-me' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
