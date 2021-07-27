import React from "react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="info col-12 col-md-6">
            <img
              className="no1"
              src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/best-seller.png"
              alt=""
            />
            <h1>
              #1 Worlds Best{" "}
              <span className="text-orange-dark">Application</span> Testing
              Tools - Braintech
            </h1>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years.
            </p>
            <button>Get Started</button>
          </div>
          <div className="col-12 col-md-6">
            <div className="illustration">
              <img
                src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/revslider/home-10/bnr-ly2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
