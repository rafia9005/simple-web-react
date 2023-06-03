import React from 'react'
import Navbar from './layout/Navbar'
import HeroSection from './layout/HeroSection'
import About from './layout/About'
import Footer from './layout/Footer'
import TimeLine from './layout/TimeLine'
import Service from './layout/Service'

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <TimeLine/>
    <Service/>
    <Footer/>
    </>
  )
}

export default Home