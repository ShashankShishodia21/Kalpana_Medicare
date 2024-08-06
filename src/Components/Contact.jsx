import React from 'react'

function Contact() {
  return (
    <div id='Contact' data-scroll data-scroll-section data-scroll-speed=".01" className='About'>
    <div className='About-heading'>
      <h1>Contact Us</h1>
    </div>
    <div data-scroll data-scroll-section data-scroll-speed=".05" className='About-main'>
      <div className='About-info'>
        <div className='form'>
            <h1>Send Us</h1>
            <form action="">
                <label htmlFor="Name">Name</label>
                <input placeholder='Full Name' type="text" />
                <label  htmlFor="Email">E-mail</label>
                <input placeholder='XYZ@gmail.com' type="e-mail" />
                <label htmlFor="requirement">Help Required</label>
                <input className='special' placeholder='How Can We Help You ?' type="text" />
            </form>
            <button role='submit'>Submit</button>
        </div>
      </div>
      <div className='About-info'>
        <div className='About-main-heading'>
          <h1>Connect with Us</h1>
        </div>
        <div className='About-info-data'>
          <p>Kalpana Medicare</p>
          <p>Plot no 10, first floor, Phase 5, </p>
          <p>Hari Ashray Nagar, Near Patanjali Yogpeeth-2, Bhadrabad,</p>
          <p>Dist - Haridwar, Uttarakhand 249405</p>
          <p>E-mail ID: infokalpanamedicare@gmail.com</p>
          <p>Mobile: +91 7467077060</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact