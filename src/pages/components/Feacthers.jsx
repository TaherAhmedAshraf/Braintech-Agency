import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Feacthers() {
  return (
    <section className="featcher">
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-12 col-md-6">
              <div className="illustration">
                <img
                  src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/about-testing-600x516.png"
                  alt=""
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div
              className="info col-12 col-md-6"
              style={{ paddingLeft: "2rem" }}
            >
              <img
                className="no1"
                src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/why.png"
                alt=""
              />
              <h1>
                Easier and Faster Testing with{" "}
                <span className="text-orange-dark">AI Testbot</span>
              </h1>
              <p>
                We've been building creative tools together for over a decade
                and have a deep appreciation tools.
              </p>
              <ul>
                <li>
                  <span className="check-icon">
                    <FaCheckCircle />
                  </span>
                  Build at the speed of innovation
                </li>
                <li>
                  <span className="check-icon">
                    <FaCheckCircle />
                  </span>
                  Build at the speed of innovation
                </li>
                <li>
                  <span className="check-icon">
                    <FaCheckCircle />
                  </span>
                  Build at the speed of innovation
                </li>
                <li>
                  <span className="check-icon">
                    <FaCheckCircle />
                  </span>
                  Build at the speed of innovation
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
