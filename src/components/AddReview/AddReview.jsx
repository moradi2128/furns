import React, { useState, useCallback } from "react";
import {} from "./index";
// === Icons ===
import StarRating from "../../subComponents/StarRating/StarRating";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import Btn from "../../subComponents/BtnCart/BtnCart";

export const Wrapper = styled.div`
  color: rgb(33, 33, 33);
  h3 {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 600;
  }
`;
export const Form = styled.form`
  label {
    display: inline-flex;
    align-items: center;
    line-height: 1;
    margin-bottom: 10px;
    color: rgb(33, 33, 33);
    font-size: 14px;
    font-weight: 600;
  }
  input,textarea {
    outline: 0;
    width: 100%;
    display: block;
    line-height: 1;
    padding: 12px 15px;
    transition: all 0.4s ease 0s;
    border-radius: 3px;
    font-family: "Open Sans";
    font-size: 14px;
    border: 1px solid rgb(235, 235, 235);
  }
  input:focus,textarea:focus {
    border: 1px solid rgb(255, 112, 4);
  }
`;

const AddReview = () => {
  // === Star Rating Value ===
  const [rating, setRating] = useState();
  const callback = useCallback((count) => {
    setRating(count);
  }, []);

  console.log(rating);
  return (
    <Wrapper>
      <h3>Add your Review</h3>
      <Form>
        <div>
          <label>
            Your Rating :
            <StarRating parentCallback={callback} />
          </label>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              id="message"
              name="message"
              label="Message"
            ></textarea>
          </div>
          <div>
            <label htmlFor="message">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="message">Email</label>
            <input type="email" />
          </div>
          <Btn type="submit">Submit</Btn>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddReview;
