import React from "react";
import { Link } from "react-router-dom";
// === Styled Components ===
import { Figure, Section, BlockQuote, Footer } from "./index";
import { CardAuthor, CardTitle } from "../../components/NewsItem/index";
// === Img ===
import img from "../../assets/images/news/2.jpg";
// === Components ===
import TopSection from "../../components/TopSection/TopSection";

// === Icons ===
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const BlogDetails = () => {
  return (
    <main>
      <TopSection
        title="UT ENIM ADMINIM VENIAM, QUIS NOSTRUD"
        pathname="UT ENIM ADMINIM VENIAM, QUIS NOSTRUD"
      />
      <article className="container">
        <div className="m-auto col-lg-9">
          <Figure>
            <img src={img} alt="" />
          </Figure>
          <Section>
            <CardAuthor>
              By
              <Link to="/">Moradi </Link>
              <Link to="/">14 September, 2021</Link>
            </CardAuthor>
            <CardTitle>
              <Link to="/">Ut enim adminim veniam, quis nostrud</Link>
            </CardTitle>
            <p>
              Ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in rep
              rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiumod tempor incididunt ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat.
            </p>
            <BlockQuote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in rep
              </p>
            </BlockQuote>
            <p>
              Ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in rep
              rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiumod tempor incididunt ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat.
            </p>
            <h3>
              <strong>
                Sed do eiumod tempor incididunt ut labore et dolore magna
                aliqua.
              </strong>
            </h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7e90gBu4pas?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
            <p>
              Ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in rep
              rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiumod tempor incididunt ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat.
            </p>
          </Section>
          <Footer>
            <div>
              <span>Tags:</span>
              <ul>
                <li>
                  <Link to="/">furniture,</Link>
                </li>
                <li>
                  <Link to="/">react</Link>
                </li>
              </ul>
            </div>
            <div>
              <span>Share:</span>
              <ul>
                <li>
                  <Link to="/">
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsPinterest />
                  </Link>
                </li>
              </ul>
            </div>
          </Footer>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;
