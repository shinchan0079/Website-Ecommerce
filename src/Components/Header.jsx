import React from 'react'
import './CSS/Header.css'
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";


import { NavLink } from "react-router-dom";

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
        <IoPerson className='cart-icon'/>
        <span>Login/SignUp</span>
      </div>
      <div className="header-cart-btn">
        <div className="header-cart-count">0</div>
        <FaCartArrowDown className='cart-icon' />
        <span>Items</span>
      </div>
    </div>


</div>

<div className="header-bottom-menu">
  <ul>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to=""><IoIosHome /></NavLink>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to="">Shop</NavLink>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to="">Flower</NavLink>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to="">Gallery</NavLink>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to="">About</NavLink>
    <NavLink className = {({isActive}) => `navLinks ${isActive? "navActive" : ""}`} to="">Contact</NavLink>
  </ul>
</div>
    </>
  )
}

export default Header