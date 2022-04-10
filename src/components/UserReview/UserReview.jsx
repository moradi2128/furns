import React, { useState } from "react";
import {Wrapper, UserProfile, ReviewContent, Rating } from "./index";
// === icons ===
import { FaUserTie } from "react-icons/fa";
// === Components ===
import StarRatingRange from "../../subComponents/StarRatingRange/StarRatingRange";

const UserReview = () => {
  const [rating, setRating] = useState(3);
  return (
    <Wrapper>
      <UserProfile>
        <FaUserTie />
      </UserProfile>
      <ReviewContent>
        <h4>White Lewis</h4>
        <Rating>
          <StarRatingRange rating={rating} />
        </Rating>
        <p>
          Vestibulum ante ipsum primis aucibus orci luctustrices ullarper
          euismod vehicula. Phasellus congue nulla.
        </p>
      </ReviewContent>
    </Wrapper>
  );
};

export default UserReview;
