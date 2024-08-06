import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import LocomotiveScroll from 'locomotive-scroll'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='landing w-full h-screen bg-[url("./assets/main-background.jpg")]'>
      <Navbar/>
      <Home />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  )
}

export default App