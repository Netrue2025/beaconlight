import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Appointment" element={<AppointmentForm />}></Route>
      </Routes>
    </Router>
    
  </StrictMode>,
)
