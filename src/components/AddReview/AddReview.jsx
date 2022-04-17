import React, { useState, useCallback } from "react";
import { Wrapper, Form } from "./index";
// === Icons ===
import StarRating from "../../subComponents/StarRating/StarRating";

import Btn from "../../subComponents/BtnCart/BtnCart";

const AddReview = () => {
  // === Star Rating Value ===
  const [rating, setRating] = useState();
  const callback = useCallback((count) => {
    setRating(count);
  }, []);

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
