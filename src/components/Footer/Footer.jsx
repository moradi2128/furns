import React from "react";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterList,
  FooterItem,
  SocialMedia,
  SocialMediaItem,
  Ul,
  Li,
  FormEmail,
  InputEmail,
  SubFooter,
} from "./index";
// === Components ===
import Btn from "../../subComponents/Btn/Btn";
// ===Icons ===
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterList>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
              tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
            <SocialMedia>
              <SocialMediaItem>
                <Link to="/">
                  <BsFacebook />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsTwitter />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsLinkedin />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsYoutube />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsPinterest />
                </Link>
              </SocialMediaItem>
            </SocialMedia>
          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>Information</h4>
            <Ul>
              <Li>
                <Link to="/about">About Us</Link>
              </Li>
              <Li>
                <Link to="/">Manufactures</Link>
              </Li>
              <Li>
                <Link to="/">Tracking Order</Link>
              </Li>
              <Li>
                <Link to="/">Privacy & Policy</Link>
              </Li>
              <Li>
                <Link to="/">Terms & Conditions</Link>
              </Li>
            </Ul>
          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>MY ACCOUNT</h4>
            <Ul>
              <Li>
                <Link to="/signin">Login</Link>
              </Li>
              <Li>
                <Link to="/cart">My Cart</Link>
              </Li>
              <Li>
                <Link to="/wishlist">Wishlist</Link>
              </Li>
              <Li>
                <Link to="/Compare">Compare</Link>
              </Li>
              <Li>
                <Link to="/signin">My Account</Link>
              </Li>
            </Ul>
          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>newseltter</h4>
            <FormEmail>
              <InputEmail type="email" placeholder="Enter E-Mail Address" />
              <Btn type="submit">Subscribe</Btn>
            </FormEmail>
          </FooterItem>
        </FooterList>
      </div>
      <SubFooter>
        <p class="sc-eHfRjS cJkIkW">
          © 2021
          <Link class="company-name" to="https://github.com/moradi2128">
            GitHub
          </Link>
        </p>
      </SubFooter>
    </FooterWrapper>
  );
};

export default Footer;
