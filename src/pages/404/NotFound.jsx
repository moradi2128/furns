import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./index";
import img404 from "../../assets/images/404.png";
import Btn from "../../subComponents/Btn/Btn";

const NotFound = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <div>
        <img src={img404} alt="Furns 404 Error Page" />
        <h1>That Page Can’t be found!</h1>
        <p>It looks like nothing was found at this location.</p>
        <Btn type="button" click={() => history.goBack()}>
          Go to Back
        </Btn>
      </div>
    </Wrapper>
  );
};

export default NotFound;
