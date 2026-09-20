import React from 'react'
import './CSS/AdsSection.css'
const AdsSection = () => {
  return (
    <>
    <div className="ads-border">
                <div className="ads-row1">
                  <div className="ads-row1-left">
                    <img src={"./Images/adrow1left.png"} alt="" />
                  </div>
                  <div className="ads-row1-right">
                    <img src={"./Images/adrow1right.png"} alt="" />
                  </div>
                </div>
                <div className="ads-row2">
                  <img src={"./Images/adrow2.png"} alt="" />
                </div>
              </div>
    </>
  )
}

export default AdsSection