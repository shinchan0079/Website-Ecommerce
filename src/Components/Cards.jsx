import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import './CSS/Cards.css'

const Cards = ({title,rp,mrp,delivery,rating,imgurl}) => {
  return (
    <>
        
        <div className="bouquet-bottom">
          <div className="card-outer">
            <div className="card-top">
              <img src={imgurl} alt="img hai" />
            </div>
            <div className="card-mid"><h4>{title}</h4></div>

            <div className="card-bottom">
              <div className="card-price">
                <div className="cards-price-det">₹{rp} <del>₹{mrp}</del></div>
                <div className="cards-cart">
                    <FaShoppingCart />

                </div>
              </div>
              <div className="delivery">Erliest Delivery: <span>{delivery}</span></div>
              <div className="review">
                <div className="stars">
                    <span className='rating'>{rating}</span>
                    <span><IoIosStar /></span>
                    <span><IoIosStar /></span>
                    <span><IoIosStar /></span>
                    <span><IoIosStar /></span>
                    <span><IoIosStarHalf /></span>
                </div>

              </div>
            </div>


          </div>
        </div>
    </>
  )
}

export default Cards