import React from 'react'
import Header from './components/common/Header'
import LoginForm from './components/homepage/Login'
import Perks from './components/homepage/Perks'
import HowItWorks from './components/homepage/HowItWorks'
import Testimonials from './components/homepage/Testimonials'
import AboutUs from './components/homepage/AboutUs'
import Footer from './components/common/Footer'
import HeroSection from './components/homepage/HeroSection'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <HeroSection/>
      <Perks/>
      <HowItWorks/>
      <Testimonials/>
      <AboutUs/>
<Footer/>
    </div>
  )
}

export default App
