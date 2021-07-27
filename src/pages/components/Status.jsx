import React from "react";
import Fade from "react-reveal/Fade";

export default function Status() {
  return (
    <section className="status">
      <div className="container">
        <Fade left>
          <div className="row center">
            <div
              className="col-12 col-md-3 text-center"
              style={{ color: "#7D88FC" }}
            >
              <h1>20k</h1>
              <p>Happy Client</p>
            </div>
            <div
              className="col-12 col-md-3 text-center"
              style={{ color: "#0073FF" }}
            >
              <h1>25k</h1>
              <p>Projects Done</p>
            </div>
            <div
              className="col-12 col-md-3 text-center"
              style={{ color: "#F1491A" }}
            >
              <h1>95k</h1>
              <p>Have Companies</p>
            </div>
            <div
              className="col-12 col-md-3 text-center"
              style={{ color: "#39EBE6" }}
            >
              <h1>50k</h1>
              <p>Team Members</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
