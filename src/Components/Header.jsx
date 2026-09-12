import React from 'react'
import './CSS/Header.css'
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";


const Header = () => {
  return (
    <>
        <div className="header-top-outer">
<span>Support</span>
<span>Offer</span>
<span>Become a vendor</span>
<span>Corporate tie Ups</span>
<span>+91 7080463532</span>
</div>
<div className="header-main-outer">
  <div className="logo"> <img src="../public/Images/logo.webp" alt="imdgsg" /> </div>
    <div className="search-outer">
    <input type="search" placeholder="search Flower, Cake, Gifts etc"  className='header-search-input'/>
    <div className="search-icon"><FaSearch />
 </div>
    </div>
    <div className="header-btns">
      <div className="header-login-btn">
        <IoPerson />
        <span>Login/SignUp</span>
      </div>
      <div className="header-cart-btn">
        <FaCartArrowDown />
        <span>Items</span>
      </div>
    </div>


</div>
    </>
  )
}

export default Header