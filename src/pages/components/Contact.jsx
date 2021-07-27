import React from "react";
import { FaHome, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row gap">
          <div className="contact-info col-12 col-md-4">
            <span>LET'S TALK</span>
            <h1>Speak With Expert Engineers.</h1>
            <div className="sub-contact-infos">
              <div className="single-sub-info">
                <div className="sub-info-logo">
                  <span>
                    <FaHome />
                  </span>
                </div>
                <div>
                  <h6>Email:</h6>
                  <p>(+088)589-8745</p>
                </div>
              </div>
              <div className="single-sub-info">
                <div className="sub-info-logo">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </div>
                <div>
                  <h6>Phone:</h6>
                  <p>support@rstheme.com</p>
                </div>
              </div>
              <div className="single-sub-info">
                <div className="sub-info-logo">
                  <span>
                    <FaLocationArrow />
                  </span>
                </div>
                <div>
                  <h6>Address:</h6>
                  <p>New Jesrsy, 1201, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form col-sm-12 col-md-8">
            <img
              src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/why.png"
              alt=""
            />
            <h1>
              Get in <span className="text-orange-light">Touch</span>
            </h1>
            <div className="form">
              <div className="row gap-1">
                <input
                  className="col-11 col-md-5"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="col-11 col-md-5"
                  type="text"
                  placeholder="E-Mail"
                />
                <input
                  className="col-11 col-md-5"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="col-11 col-md-5"
                  type="text"
                  placeholder="Your Website"
                />
                <textarea
                  className="col-11 col-md-10"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Your message here"
                ></textarea>
              </div>
              <button className="">Submit Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
