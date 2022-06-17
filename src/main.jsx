import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Layout from './components/Layout'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="about" element={<Layout><AboutPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
