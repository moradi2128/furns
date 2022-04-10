import { React, useState } from "react";
import {
  CounterContainer,
  CounterOutput,
  BtnContainer,
  ControlBtn,
} from "./index";
const Counter = ({ parentCallback, productDetail }) => {
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
    parentCallback(counter + 1);
  };

  //decrease counter
  const decrease = () => {
    counter > 1 && setCounter((count) => count - 1);
    counter > 1 && parentCallback(counter - 1);
  };

  return (
    <CounterContainer productDetail={productDetail}>
      <BtnContainer productDetail={productDetail}>
        <ControlBtn className="control__btn" onClick={decrease}>
          -
        </ControlBtn>
        <CounterOutput productDetail={productDetail}>{counter}</CounterOutput>
        <ControlBtn className="control__btn" onClick={increase}>
          +
        </ControlBtn>
      </BtnContainer>
    </CounterContainer>
  );
};

export default Counter;
