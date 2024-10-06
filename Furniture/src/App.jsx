import React from "react"
import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/Home"
import LogIn from './components/logIn/LogIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LogIn" element={<LogIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

