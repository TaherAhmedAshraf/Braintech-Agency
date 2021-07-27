import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Button } from "@material-ui/core";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Testimonials() {
  const testimonals = [
    {
      id: 1,
      name: "Jorina Bibi",
      title: "CEO, Brick Consulting",
      pear: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/04/3.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Abdur Rashed",
      title: "CEO, Keen IT Solution",
      pear: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/test5.png",

      rating: 4.5,
    },
    {
      id: 3,
      name: "Monty Moni",
      title: "CEO, Keen IT Solution",
      pear: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/04/1.jpg",

      rating: 4.5,
    },
    {
      id: 4,
      name: "Mike Hoten",
      title: "CEO, Brick Consulting",
      pear: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/04/2.jpg",

      rating: 4.5,
    },
    {
      id: 5,
      name: "John Richard",
      title: "CEO, Brick Consulting",
      pear: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/04/3.jpg",
      rating: 4.5,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1199, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="testimonials">
      <div className="container-fluid">
        <div className="section-title">
          <img
            src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/heart.png"
            alt=""
          />
          <h2>
            Clients <span className="text-orange-light">Testimonials</span>
          </h2>
          <p>
            We've been building creative tools together for over a decade and
            have a deep appreciation for software applications and AI tools.
          </p>
        </div>
        <div className="carsoul">
          <Carousel responsive={responsive} infinite={true}>
            {testimonals.map((item, i) => {
              return (
                <Paper className="testimonal-item" key={item.id}>
                  <div className="testimonial-header row">
                    <div className="col-4">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-8">
                      <h5>{item.name}</h5>
                      <p>{item.title}</p>
                      <span>
                        <BsStarFill className="mx-1" />
                        <BsStarFill className="mx-1" />
                        <BsStarFill className="mx-1" />
                        <BsStarFill className="mx-1" />
                        <BsStarHalf className="mx-1" />
                      </span>
                    </div>
                    <div className="test-pera">
                      <h6>{item.pear}</h6>
                      <img
                        src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/quote11.png"
                        alt=""
                      />
                    </div>
                  </div>
                </Paper>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
