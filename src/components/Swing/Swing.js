import React from "react";
import Box from "../Box/Box";
import "./Swing.css";
import Human from "../Human/Human";

const Swing = () => {
  return (
    <div className="swing">
      <div className="horizontal">
        <Box width="600px" height="10px" stretch="10px" />
      </div>
      <div className="stands">
        <div className="stand1">
          <Box width="500px" height="10px" stretch="10px" />
        </div>
        <div className="stand2">
          <Box width="500px" height="10px" stretch="10px" />
        </div>
      </div>
      <div className="stands-two">
        <div className="stand1">
          <Box width="500px" height="10px" stretch="10px" />
        </div>
        <div className="stand2">
          <Box width="500px" height="10px" stretch="10px" />
        </div>
      </div>
      <div className="rope">
        <div className="left">
          <Box width="350px" height="10px" stretch="10px" />
        </div>
        <div className="right">
          <Box width="350px" height="10px" stretch="10px" />
          <div className="seat">
            <Box width="200px" height="10px" stretch="100px" />
          </div>
          <div className="human2">
            <Human />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swing;
