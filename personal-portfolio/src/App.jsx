import React from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import Project from './components/project'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Project />
      <Skill />
      <Education />
      <Footer />
    </>
  )
}

export default App

