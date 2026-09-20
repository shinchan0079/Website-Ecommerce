import React from "react";
import "./CSS/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-outer-section">
        <div className="footer-top">
          <div className="footer-secure-outer footer-line">
            <div className="secure-payment-icon">
              <img src="/Images/f1.png" alt="" />
            </div>
            <div className="secure-payment-text">
              <h5>Secure Payment</h5>
              <p>
                With support for cards, net banking, UPI, wallets & more, we
                offer seamless digital payment experience
              </p>
            </div>
          </div>

          <div className="footer-secure-outer footer-line">
            <div className="secure-payment-icon">
              <img src="/Images/f2.png" alt="" />
            </div>
            <div className="secure-payment-text">
              <h5>Most Trusted Brand</h5>
              <p>
                Our solutions are purely consumer centric, we listen to you and
                work for your safety, comfort and style.
              </p>
            </div>
          </div>

          <div className="footer-secure-outer">
            <div className="secure-payment-icon">
              <img src="/Images/f3.png" alt="" />
            </div>
            <div className="secure-payment-text">
              <h5>Customised Gifting Options</h5>
              <p>
                Our design experts make sure you find uniqueness and exclusivity
                in all our offerings
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-line-footer" />

        <div className="footer-bottom">
          <div className="footer-bottom-1">
            <img src="./Images/footer-logo.png" alt="" />
            <p>
              Flowera is a one-stop solution for Flowers, cakes & gift delivery
              to More than 500plus locations in India.
            </p>
          </div>
          <div className="footer-bottom-2">
            <h4>Information</h4>
            <ul>
              <li>All City</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Privacy & Policy</li>
              <li>Refund & Cancellation</li>
              <li>Terms and Conditions</li>
              <li>About Us</li>
              <li>Offers</li>
              <li>Become a Vendor</li>
              <li>Corporate Tie-ups</li>
            </ul>
          </div>
          <div className="footer-bottom-3">
            <h4>Follow Us</h4>
            <div className="footer-socialmedia-icons">
              <div className="facbook-icon"><FaFacebook />
</div>
              <div className="instagram-icon"><FaInstagram/></div>
              <div className="linkdin-icon"><FaLinkedin/></div>
              <div className="twitter-icon"><FaTwitter/>
              </div>
            </div>
          </div>
          <div className="footer-bottom-4"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
