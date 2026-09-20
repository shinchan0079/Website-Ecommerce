import React from 'react'
import './CSS/CardBox.css'

const CardBox = () => {
  return (
    <>
        <div className="card-img-inner">
            <div className="card-box">
              <img src="./Images/flowerscrd.png" alt="" />
            </div>
            <div className="card-box">
              <img src="./Images/cakescrd.png" alt="" />

            </div>
            <div className="card-box">

              <img src="./Images/comboscrd.png" alt="" />
            </div>
            <div className="card-box">

              <img src="./Images/chocolatecrd.png" alt="" />
            </div>
          </div>
    </>
  )
}

export default CardBox