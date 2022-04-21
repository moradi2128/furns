import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// === Styled Components ===
import { Wrapper, InfoItem, ReviewContainer } from "./index";

// === Data ===
import { productDetails } from "../../data";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import TabList from "../../components/TabList/TabList";
import AddReview from "../../components/AddReview/AddReview";
import UserReview from "../../components/UserReview/UserReview";
import RelatedProduct from "../../components/RelatedProducts/RelatedProduct";
import Loading from "../../subComponents/Loading/Loading";

// === Redux ===
import {
  fetchAsyncProductDetail,
  removeFetchAsyncProduct,
  addProductItem
} from "../../features/products/ProductsSlice";

import ProductDescription from "../../components/ProductDescription/ProductDescription";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ItemsDetail, statusDetail } = useSelector((state) => state.products);
  useEffect(() => {
    // dispatch(fetchAsyncProductDetail(id));
    dispatch(addProductItem(id))
    return () => {
      dispatch(removeFetchAsyncProduct());
    };
  }, [dispatch, id]);
  return (
    <main>
      {statusDetail !== "success" ? (
        <Loading />
      ) : (
        <>
          <TopSection title={ItemsDetail[0].title} name={ItemsDetail[0].title} />
          <section>
            <Wrapper className="container">
              <ProductDescription ItemsDetail={ItemsDetail[0]} />
              <TabList>
                {/* Tab Item */}
                <li id="0">Description</li>
                {ItemsDetail[0].info && <li id="1">Additional Info</li>}
                <li id="2">Reviews</li>
                {/* Tab List Item */}
                <div id="0">{ItemsDetail[0].description}</div>
                {ItemsDetail[0].info && (
                  <div id="1">
                    <ul>
                      <InfoItem>
                        <span>Color:</span>
                        {productDetails[0].color}
                      </InfoItem>
                      <InfoItem>
                        <span>size:</span>
                        {productDetails[0].size}
                      </InfoItem>
                      <InfoItem>
                        <span>Material:</span>
                        {productDetails[0].Material}
                      </InfoItem>
                    </ul>
                  </div>
                )}
                <div id="2">
                  <ReviewContainer>
                    <div className="col-lg-7">
                      <UserReview />
                      <UserReview />
                      <UserReview />
                      <UserReview />
                    </div>
                    <div className="col-lg-5">
                      <AddReview />
                    </div>
                  </ReviewContainer>
                </div>
              </TabList>
              <RelatedProduct />
            </Wrapper>
          </section>
        </>
      )}
    </main>
  );
};

export default ProductDetails;
