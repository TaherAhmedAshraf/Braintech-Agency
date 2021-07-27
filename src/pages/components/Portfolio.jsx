import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Portfolio() {
  const items = [
    {
      id: 1,
      title: "Growth Strategies",
      para: "Application Testing",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/pr_4-768x494.jpg",
    },
    {
      id: 2,
      title: "Product Design",
      para: "Application Testing",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/pr_3-768x494.jpg",
    },
    {
      id: 3,
      title: "Analytic Solutions",
      para: "Application Testing",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/pr_2-768x494.jpg",
    },
    {
      id: 4,
      title: "Product Engineering",
      para: "Application Testing",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/pr_1-768x494.jpg",
    },
  ];
  return (
    <>
      <section className="portfolio">
        <div className="container">
          <div className="section-title">
            <img
              src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/portfolio.png"
              alt=""
            />
            <h2>
              Recent <span className="text-orange-light">Case Studies</span>
            </h2>
            <p>
              We've been building creative tools together for over a decade and
              have a deep appreciation for software applications and AI tools.
            </p>
          </div>
          <div className="row">
            {items.map((item) => {
              return (
                <Zoom left>
                  <div className="single-item col-12 col-md-6" key={item.id}>
                    <div className="item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="item-info">
                      <h4>{item.title}</h4>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
