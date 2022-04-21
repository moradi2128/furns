import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCard } from "../../features/products/CartSlice";
import { removeFromWishlist } from "../../features/products/WishlistSlice";
// === Styled Components ===
import { List, ListHead, ListBody } from "../Cart/index";
import { BtnWishlist } from "./index";
// === Icons ===
import { TiDeleteOutline } from "react-icons/ti";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import EmptyBox from "../../components/EmptyBox/EmptyBox";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  // === Media Query 992 px ===
  const [matchesLg, setMatchesLg] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesLg(e.matches));
  }, []);

  // === Add to Cart ===
  const handlerAddToCart = (productItem) => {
    dispatch(addToCard(productItem));
  };
  const handlerRemoveWishlist = (productItem) => {
    dispatch(removeFromWishlist(productItem));
  };
  return (
    <main>
      <TopSection title="wishlist" name="WISHLIST" />
      <section>
        {wishlistItems.length === 0 ? (
          <EmptyBox> in your wishlist</EmptyBox>
        ) : (
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
                      {wishlistItems.map((item) => {
                        return (
                          <li key={item.id}>
                            <li>
                              <Link
                                to={`/product/${item.id}`}
                                className="img-container"
                              >
                                <img src={Array.isArray(item.image)? item.image[0]: item.image} alt={item.title} />
                              </Link>
                            </li>
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
                                <li>
                                  <BtnWishlist type="button" onClick={() => handlerAddToCart(item)}>
                                    Add to Cart
                                  </BtnWishlist>
                                </li>
                                <li>{item.price}</li>
                                <li className="action-btn">
                                  <button type="button" onClick={() => handlerRemoveWishlist(item)}>
                                    <TiDeleteOutline />
                                  </button>
                                </li>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                {/* ====  === List item in min-width:992px ===*/}
                {matchesLg &&
                  wishlistItems.map((item) => {
                    return (
                      <ul key={item.id}>
                        <li>
                          <Link
                            to={`/product/${item.id}`}
                            className="img-container"
                          >
                            <img src={Array.isArray(item.image)? item.image[0]: item.image} alt={item.title} />
                          </Link>
                        </li>
                        <li>
                          <Link to={`/product/${item.id}`}>{item.title}</Link>
                        </li>
                        <li>{item.price}</li>
                        <li>
                          <BtnWishlist
                            type="button"
                            onClick={() => handlerAddToCart(item)}
                          >
                            Add to Cart
                          </BtnWishlist>
                        </li>
                        <li className="action-btn">
                          <button
                            type="button"
                            onClick={() => handlerRemoveWishlist(item)}
                          >
                            <TiDeleteOutline />
                          </button>
                        </li>
                      </ul>
                    );
                  })}
              </ListBody>
            </List>
          </div>
        )}
      </section>
    </main>
  );
};

export default Wishlist;
