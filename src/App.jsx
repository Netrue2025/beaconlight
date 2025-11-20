import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";


import './App.css'

function App() {
  return (
    <div className="font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <AppointmentForm />
      <Footer />
    </div>
  )
}

export default App
