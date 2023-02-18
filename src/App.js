import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import SolarInstallations from './pages/Services/SolarInstallations/SolarInstallations'
import Footer from './components/Footer/Footer'
import HomeAutomation from './pages/Services/HomeAutomation/HomeAutomation'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route strict path="/" element={ <Home/> } />
        <Route strict path="about" element={ <About/> } />
        <Route strict path="contact" element={ <Contact/> } />
        <Route strict path="services/residential/solar" element={ <SolarInstallations/> } />
        <Route strict path="services/residential/home-automation" element={ <HomeAutomation/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
