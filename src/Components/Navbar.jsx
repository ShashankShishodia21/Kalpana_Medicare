import React from 'react'

function Navbar() {
  return (
    <div className='Navbar font-["Test Founders Grotesk X-Cond SmBd"]'>
      <div className='Navbar-main'>
        <div className='logo'>
            <img src=".\src\assets\logo.png" alt="" />
            <h1>KALPANA <span>MEDICARE</span></h1>
        </div>
    
        <div className='links'>
            <a href="./#Home">Home</a>
            <a href="./#About">About Us</a>
            <a href="./#Product">Products</a>
            <a href="./#Contact">Contact Us</a>
        </div>
      </div>
    </div>  
  )
}

export default Navbar