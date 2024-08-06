import React from 'react'

function About() {
  return (
    <div id='About' data-scroll data-scroll-section data-scroll-speed=".01" className='About'>
      <div className='About-heading'>
        <h1>About Us</h1>
      </div>
      <div data-scroll data-scroll-section data-scroll-speed=".05" className='About-main'>
        <div className='About-info'>
          <div className='About-main-heading'>
            <h1>WHO WE ARE AND WHY US?</h1>
          </div>
          <div className='About-info-data'>
            <h1>Well, lots of reasons, but most importantly because</h1>
            <p>KALPANA MEDICARE  is a registered warehouse located in Haridwar Uttrakhand and meerut Uttar Pradesh with more than 30 years experience in sourcing and supplying a vast range of medicines. In kalpana we are targeting the best solutions for our clinets by adopting service principles of reliability, quality and responsibility with a young, dynamic, and professional team in medical sector.</p>
          </div>
          <div className="About-info-data">
            <h1>WHAT WE DO</h1>
            <p>We supply both generic and branded medicines from pharmaceutical manufacturers. we are committed to offer the highest-quality products while maintaining the most competitive prices. We have the capability to supply a wide range of approved medicines to all  active  pharmaceutical business, governmental and private hospitals, clinics and other healthcare institutions. Kalpana Medicare has been certified with Wholesale Dealers License (WDL) as well as Good Distribution Practice (GDP) which are mandatory for pharmaceutical wholesale activities.</p>
          </div>
        </div>
        <div className='About-info'>
          <div className='About-main-heading'>
            <h1>OUR VALUES</h1>
          </div>
          <div className='About-info-data'>
            <p><span>INTEGRITY</span> : out commitment to business ethics, fairness, honesty and transperency is equally important to us, as is to achieving business success. At the end of each day we want to be proud not only of the goals we have achieved, but also for the way we have achieved them.</p>
            <p><span>INNOVATION</span> : we believe we can make a difference only by thinking beyond the obivios prior to every action we take, se always consider new paths so as to bring the values to the healthcare community to patients and thir families</p>
            <p><span>Commitment to excellence</span> : we always aim high and demand the best from ourselves and our partners. Success does not make us complacent. For everything we do we always question ourselves whether there is a better way to do it and it their is we follow it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About