import React from "react";
import "./CSS/ReviewCards.css";
import { MdPerson } from "react-icons/md";

const ReviewCards = () => {
  return (
    <div className="review-cards">
      <div className="avtar">
        <div className="avtaricon">
          <MdPerson />
        </div>
      </div>
      <span>mukesh kumar</span>
      <h4>beautifull flower and chocolate</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        maxime necessitatibus magni facere, iste ipsum! Quasi corrupti
        voluptatem reprehenderit rem?
      </p>
    </div>
  );
};

export default ReviewCards;
