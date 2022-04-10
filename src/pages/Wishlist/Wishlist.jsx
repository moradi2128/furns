import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// === Styled Components ===
import { List, ListHead, ListBody } from "../Cart/index";
import { BtnWishlist } from "./index";
// === Icons ===
import { TiDeleteOutline } from "react-icons/ti";

import img2 from "../../assets/images/2.jpg";
import img4 from "../../assets/images/4.jpg";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";

const Wishlist = () => {
  // === Media Query 992 px ===
  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  return (
    <main>
      <TopSection title="wishlist" pathname="WISHLIST" />
      <section>
        <div className="container">
          <List>
            {/* Header table === */}
            {matchesLg && (
              <ListHead wishlist>
                <ul>
                  <li>image</li>
                  <li>PRODUCT NAME</li>
                  <li>UNTIL PRICE</li>
                  <li>ADD TO CART</li>
                  <li>Action</li>
                </ul>
              </ListHead>
            )}
            {/* === Body Table === */}
            <ListBody wishlist>
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
                      <div className="description-product-price">
                        <li>
                          <BtnWishlist type="button">Add to Cart</BtnWishlist>
                        </li>
                        <li>199.0</li>
                        <li className="action-btn">
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
                        </Link>
                      </li>
                      {/* <li>199.0</li> */}
                      <div className="description-product-price">
                        <li>
                          <BtnWishlist type="button">Add to Cart</BtnWishlist>
                        </li>
                        <li>199.0</li>
                        <li className="action-btn">
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
                      <BtnWishlist type="button">Add to Cart</BtnWishlist>
                    </li>
                    <li className="action-btn">
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
                    </li>
                    <li>69.0</li>
                    <li>
                      <BtnWishlist type="button">Add to Cart</BtnWishlist>
                    </li>
                    <li className="action-btn">
                      <button type="button">
                        <TiDeleteOutline />
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </ListBody>
          </List>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
