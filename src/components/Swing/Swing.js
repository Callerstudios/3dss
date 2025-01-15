import React from "react";
import Box from "../Box/Box";
import "./Swing.css";

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
    </div>
  );
};

export default Swing;
