import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCard,
  clearCart,
  getTotal,
} from "../../features/products/CartSlice";
// === Styled Components ===
import {
  List,
  ListHead,
  ListBody,
  BtnContainer,
  CouponContainer,
  BtnCheckoutContainer,
} from "./index";

// === Icons ===
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Counter from "../../subComponents/counter/Counter";
import Btn from "../../subComponents/Btn/Btn";
import EmptyBox from "../../components/EmptyBox/EmptyBox";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  // === Media Query 992 px ===

  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  const handlerDeleteCartItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handlerDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handlerIncreaseCart = (cartItem) => {
    dispatch(addToCard(cartItem));
  };
  const handlerClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <main>
      <TopSection title="cart" name="cart" />
      <section>
        {cartItems.length === 0 ? (
          <EmptyBox> in your cart</EmptyBox>
        ) : (
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
                  <ul>
                    {cartItems.map((item) => {
                      return (
                        <li className="cartItem" key={item.id}>
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="img-container"
                            >
                              <img src={Array.isArray(item.image)? item.image[0]: item.image} alt={item.title} />
                            </Link>
                          </div>
                          <div className="description-product">
                            <li>
                              <Link
                                to={`/product/${item.id}`}
                                className="description-product-title"
                              >
                                {item.title}
                              </Link>
                            </li>

                            <div className="description-product-price">
                              <li>${item.price}</li>
                              <li>
                                <Counter
                                  Counter={item.cartQuantity}
                                  clickDecrease={() =>
                                    handlerDecreaseCart(item)
                                  }
                                  clickIncrease={() =>
                                    handlerIncreaseCart(item)
                                  }
                                />
                              </li>
                              <li>${item.cartQuantity * item.price}</li>
                              <li className="action-btn">
                                <Link to="/">
                                  <FiEdit />
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handlerDeleteCartItem(item)}
                                >
                                  <TiDeleteOutline />
                                </button>
                              </li>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* ====  === List item in min-width:992px ===*/}
                {matchesLg && (
                  <ul>
                    {cartItems.map((item) => {
                      return (
                        <li className="cartItem" key={item.id}>
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="img-container"
                            >
                              <img src={Array.isArray(item.image)? item.image[0]: item.image} alt={item.title} />
                            </Link>
                          </div>
                          <div>
                            <Link to={`/product/${item.id}`}>{item.title}</Link>
                          </div>
                          <div>${item.price}</div>
                          <div>
                            <Counter
                              Counter={item.cartQuantity}
                              clickDecrease={() => handlerDecreaseCart(item)}
                              clickIncrease={() => handlerIncreaseCart(item)}
                            />
                          </div>
                          <div>${item.cartQuantity * item.price}</div>
                          <div className="action-btn">
                            <Link to={`/product/${item.id}`}>
                              <FiEdit />
                            </Link>
                            <button
                              type="button"
                              onClick={() => handlerDeleteCartItem(item)}
                            >
                              <TiDeleteOutline />
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* === Footer Table */}
                <ul className="tr-footer">
                  <div>
                    Grand Total:
                    <span>${cartTotalAmount}</span>
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
                <Btn type="button">Apply Coupon</Btn>
              </CouponContainer>
              <BtnCheckoutContainer className="col-lg-6">
                <Btn type="button" click={() => handlerClearCart()}>
                  CLEAR CART
                </Btn>
                <Btn type="button">PROJECT TO CHECKOUT</Btn>
              </BtnCheckoutContainer>
            </BtnContainer>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
