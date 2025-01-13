import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box"
      style={{
        "--width": props.width,
        "--height": props.height,
        "--stretch": props.stretch,
      }}
    >
      <div className="front-face"></div>
      <div className="left-face"></div>
      <div className="right-face"></div>
      <div className="top-face"></div>
      <div className="bottom-face"></div>
      <div className="back-face"></div>
    </div>
  );
};

export default Box;