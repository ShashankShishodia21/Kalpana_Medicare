import React from 'react'

function Home() {
  return (
    <div id='Home' data-scroll data-scroll-section data-scroll-speed=".1" className='Home'>
        <div data-scroll data-scroll-section data-scroll-speed=".02" className='Home-main'>
            <div className='Home-img'>
                <img src=".\src\assets\logo.png" alt="" />
            </div>
            <div className='Home-info uppercase tracking-tight leading-1'>
                <h1>For Us,</h1>
                <h1>Your <span>Health</span> is</h1>
                <h1>always first</h1>
            </div>
        </div>
    </div>
  )
}

export default Home