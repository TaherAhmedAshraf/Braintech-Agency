import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Button, colors } from "@material-ui/core";

export default function Team() {
  const TeamMembers = [
    {
      id: 1,
      name: "Corey Anderson",
      title: "PRESIDENT & CEO",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/f-600x600.jpg",
    },
    {
      id: 2,
      name: "Julia Siger",
      title: "PRODUCT DESIGNER",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/teamd_3-600x600.jpg",
    },
    {
      id: 3,
      name: "ISSABELLA CROLIN",
      title: "PROJECT MANAGER",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/team_21-600x600.jpg",
    },
    {
      id: 4,
      name: "Claier Divas",
      title: "PRESIDENT & CEO",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/team_1-1-600x600.jpg",
    },
    {
      id: 5,
      name: "Zingzin Zizu",
      title: "PRESIDENT & CEO",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/team_7-600x600.jpg",
    },
    {
      id: 6,
      name: "Miniki Funo",
      title: "PRESIDENT & CEO",
      image:
        "https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/02/team_10-600x600.jpg",
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
    <section className="team">
      <div className="container">
        <div className="section-title">
          <img
            src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2021/01/tips.png"
            alt=""
          />
          <h2>
            Expert <span className="text-orange-light">Team</span> Repair
          </h2>
          <p>
            We've been building creative tools together for over a decade and
            have a deep appreciation for software applications and AI tools.
          </p>
        </div>
        <div className="team-members">
          <Carousel
            responsive={responsive}
            infinite={true}
            // arrows={false}
            // showDots={true}
            // dotListClass={{}}
          >
            {TeamMembers.map((member, i) => {
              return (
                <Paper className="single-member col-11" key={member.id}>
                  <div>
                    <div className=" row-cols-8">
                      <img src={member.image} alt="" />
                    </div>
                    <div className="row-cols-4">
                      <h6>{member.name}</h6>
                      <p>{member.title}</p>
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
