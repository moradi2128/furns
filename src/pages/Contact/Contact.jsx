import React from "react";
import {
  Map,
  ContactContainer,
  ContactItem,
  ContactInfo,
  Form,
  FormContainer,
} from "./index";

// === Components ===
import TopSection from "../../components/TopSection/TopSection";
import Btn from "../../subComponents/Btn/Btn";

const Contact = () => {
  return (
    <main>
      <TopSection title="CONTACT" pathname="CONTACT" />
      <section className="container">
        <Map>
          <iframe src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
        </Map>
        <ContactContainer>
          <ContactItem className="col-lg-4">
            <div>
              <h2>Contact Info</h2>
              <ContactInfo>
                <h3>Phone:</h3>
                <div>
                  <p>
                    <a href="tel:+012345678102">+012 345 678 102</a>
                  </p>
                  <p>
                    <a href="tel:+012345678203">+012 345 678 203</a>
                  </p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Email:</h3>
                <div>
                  <p>
                    <a href="mailto:email@here.com">email@here.com</a>
                  </p>
                  <p>
                    <a href="mailto:your@email.here">your@email.here</a>
                  </p>
                </div>
              </ContactInfo>
              <ContactInfo>
                <h3>Address:</h3>
                <div>
                  <p>Address goes here,</p>
                  <p>street, Crossroad 123.</p>
                </div>
              </ContactInfo>
            </div>
          </ContactItem>
          <ContactItem className="col-lg-8">
            <div>
              <h2>Get In Touch</h2>
              <Form>
                <FormContainer>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" />
                </FormContainer>
                <FormContainer>
                  <label htmlFor="message">Message</label>
                  <textarea rows="8" id="message" name="message"></textarea>
                </FormContainer>
                <Btn type="submit">SEND MESSAGE</Btn>
              </Form>
            </div>
          </ContactItem>
        </ContactContainer>
      </section>
    </main>
  );
};

export default Contact;
