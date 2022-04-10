import React, { useState } from "react";
import "./style.css";
import { AiFillStar } from "react-icons/ai";

const StarRatingRange = ({ rating }) => {
  return (
    <div className="star-rating-range">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= rating ? "btn-star-range on-star" : "btn-star-range off-star"
            }
          >
            <span className="star">
              <AiFillStar />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingRange;
