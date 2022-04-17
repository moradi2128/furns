import { React, useState } from "react";
import {
  CounterContainer,
  CounterOutput,
  BtnContainer,
  ControlBtn,
} from "./index";
const Counter = ({
  Counter,
  productDetail,
  clickDecrease,
  clickIncrease,
  parentCallback,
}) => {
  const [counter, setCounter] = useState(Counter);
  //increase counter
  const increase = () => {
    clickIncrease();
    setCounter(counter + 1);
    parentCallback(counter + 1);
  };

  //decrease counter
  const decrease = () => {
    clickDecrease();
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
