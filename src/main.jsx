import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="about" element={<Layout><About /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
