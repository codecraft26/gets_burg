import React from "react";
import "./aboutSection.css";
import me from "./me.jpeg"

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1 component="h1">About Us</h1>

        <div>
          <div>
            <img
              src={me}
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              alt="Founder"
            />
            <h1>Aman Kumar Gupta</h1>
           
            <span>
              This is a sample wesbite made by Aman Kumar Gupta. Only with the
              purpose to learn the concept of mern stack with full stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;