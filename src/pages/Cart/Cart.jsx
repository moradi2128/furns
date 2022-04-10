import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// === Styled Components ===
import {
  List,
  ListHead,
  ListBody,
  Property,
  BtnContainer,
  CouponContainer,
  BtnCheckoutContainer,
} from "./index";

// === Icons ===
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

import img2 from "../../assets/images/2.jpg";
import img4 from "../../assets/images/4.jpg";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Counter from "../../subComponents/counter/Counter";
import Btn from "../../subComponents/Btn/Btn";

const Cart = () => {
  // === Media Query 992 px ===
  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  const [counter, setCounter] = useState(1);
  const callback = useCallback((count) => {
    setCounter(count);
  }, []);
  return (
    <main>
      <TopSection title="cart" pathname="cart" />
      <section>
        <div className="container">
          <List>
            {/* Header table === */}
            {matchesLg && (
              <ListHead>
                <ul>
                  <li>image</li>
                  <li>PRODUCT NAME</li>
                  <li>UNTIL PRICE</li>
                  <li>QTY</li>
                  <li>SUBTOTAL</li>
                  <li>Action</li>
                </ul>
              </ListHead>
            )}
            {/* === Body Table === */}
            <ListBody>
              {/* === List item in max-width:992px ===*/}
              {!matchesLg && (
                <>
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={img2} alt="img" />
                      </Link>
                    </li>
                    <div className="description-product">
                      <li>
                        <Link to="/" className="description-product-title">
                          {" "}
                          Josefa Queen Size Bed with Storage in Natural Teak
                          Wood Finish
                        </Link>
                      </li>
                      {/* <li>199.0</li> */}
                      <div className="description-product-price">
                        <li>
                          <Counter parentCallback={callback} />
                        </li>
                        <li>199.0</li>
                        <li className="action-btn">
                          <Link to="/">
                            <FiEdit />
                          </Link>
                          <button type="button">
                            <TiDeleteOutline />
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={img4} alt="img" />
                      </Link>
                    </li>
                    <div className="description-product">
                      <li>
                        <Link to="/" className="description-product-title">
                          {" "}
                          <Link to="/"> Variable Product</Link>
                          <Property>Chocolate / Semi Double / Wood</Property>
                        </Link>
                      </li>
                      {/* <li>199.0</li> */}
                      <div className="description-product-price">
                        <li>
                          <Counter parentCallback={callback} />
                        </li>
                        <li>199.0</li>
                        <li className="action-btn">
                          <Link to="/">
                            <FiEdit />
                          </Link>
                          <button type="button">
                            <TiDeleteOutline />
                          </button>
                        </li>
                      </div>
                    </div>
                  </ul>
                </>
              )}
              {/* ====  === List item in min-width:992px ===*/}
              {matchesLg && (
                <>
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={img2} alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {" "}
                        Josefa Queen Size Bed with Storage in Natural Teak Wood
                        Finish
                      </Link>
                    </li>
                    <li>169.0</li>
                    <li>
                      <Counter parentCallback={callback} />
                    </li>
                    <li>169.0</li>
                    <li className="action-btn">
                      <Link to="/">
                        <FiEdit />
                      </Link>
                      <button type="button">
                        <TiDeleteOutline />
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={img4} alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/"> Variable Product</Link>
                      <Property>Chocolate / Semi Double / Wood</Property>
                    </li>
                    <li>69.0</li>
                    <li>
                      <Counter parentCallback={callback} />
                    </li>
                    <li>69.0</li>
                    <li className="action-btn">
                      <Link to="/">
                        <FiEdit />
                      </Link>
                      <button type="button">
                        <TiDeleteOutline />
                      </button>
                    </li>
                  </ul>
                </>
              )}
              {/* === Footer Table */}
              <ul className="tr-footer">
                <div>
                  Grand Total:
                  <span>$245.00</span>
                </div>
              </ul>
            </ListBody>
          </List>
          <BtnContainer>
            <CouponContainer className="col-lg-6">
              <input
                type="text"
                placeholder="Enter your coupon code uf you have one"
              />
              <Btn type="submit">Apply Coupon</Btn>
            </CouponContainer>
            <BtnCheckoutContainer className="col-lg-6">
              <Btn type="submit">CLEAR CART</Btn>
              <Btn type="submit">PROJECT TO CHECKOUT</Btn>
            </BtnCheckoutContainer>
          </BtnContainer>
        </div>
      </section>
    </main>
  );
};

export default Cart;
