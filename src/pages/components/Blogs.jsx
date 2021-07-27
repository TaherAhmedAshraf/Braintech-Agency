import React from "react";

export default function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <img
            src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/tips.png"
            alt=""
          />
          <h2>
            Expert <span className="text-orange-light">Technology</span> Updates
          </h2>
          <p>
            We've been building creative tools together for over a decade and
            have a deep appreciation for software applications and AI tools.
          </p>
        </div>
        <div className="all-blogs row">
          <div className="single-blog col-12 col-md-4">
            <div>
              <div className="image">
                <img
                  src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/b_4-600x335.jpg"
                  alt=""
                />
              </div>
              <div>
                <div>21 jan 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
