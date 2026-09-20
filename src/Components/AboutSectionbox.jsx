import React from 'react'
import './CSS/AboutSectionbox.css'
const AboutSectionbox = () => {
  return (
    <>
    <div className="about-inner-box">
            <div className="about-inner-box-icon">
              <img src="./Images/Saftyandhy.png" alt="" />

            </div>
            <div className="about-inner-box-text">
              <h4>Safety And Hygiene</h4>
              <p>Our Bakery & Florist shop takes complete control over safety and hydgeine. We also follow proper covid safety guidelines.</p>

            </div>
          </div>
          <div className="about-inner-box">
            <div className="about-inner-box-icon">
              <img src="./Images/express.png" alt="" />
            </div>
            <div className="about-inner-box-text">
              <h4>Express 3 Hour Delivery</h4>
              <p>Get Flowers,cakes, gifts,chocolate same-day delivery in 3 hours. We guarantee ontime delivery.</p>
            </div>
          </div>
          <div className="about-inner-box">
            <div className="about-inner-box-icon">
              <img src="./Images/location.png" alt="" />

            </div>
            <div className="about-inner-box-text">
              <h4>Delivery In 500+ Cities</h4>
              <p>We bet, you will have the best experience of flowers & cakes in more the 600 cities in India.</p>
            </div>
          </div>
          <div className="about-inner-box">
            <div className="about-inner-box-icon">
              <img src="./Images/midnight.png" alt="" />
            </div>
            <div className="about-inner-box-text">
              <h4>Midnight Delivery</h4>
              <p>Surprise your loved one with our reliable midnight flower delivery services.</p>
            </div>
          </div>
    </>
  )
}

export default AboutSectionbox