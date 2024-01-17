import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projet from './pages/Portfolio'
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/portfolio' element={<Projet/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
