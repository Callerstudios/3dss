import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import "./Swing.css";
import Human from "../Human/Human";

const Swing = () => {
  const [width, setWidth] = useState(window.innerWidth / 2);
  const handleResize = () => {
    setWidth(window.innerWidth / 2);
  };
  useEffect(() => window.addEventListener("resize", handleResize), []);
  return (
    <div className="swing">
      <div className="horizontal">
        <Box width={width + "px"} height="10px" stretch="10px" />
      </div>
      <div className="stands">
        <div className="stand1">
          <Box width={width * 0.9 + "px"} height="10px" stretch="10px" />
        </div>
        <div className="stand2">
          <Box width={width * 0.9 + "px"} height="10px" stretch="10px" />
        </div>
      </div>
      <div
        className="stands-two"
        style={{
          transform: `rotateZ(90deg) translateY(calc(${-width}px)) `,
        }}
      >
        <div className="stand1">
          <Box width={width * 0.9 + "px"} height="10px" stretch="10px" />
        </div>
        <div className="stand2">
          <Box width={width * 0.9 + "px"} height="10px" stretch="10px" />
        </div>
      </div>
      <div className="rope">
        <div
          className="left"
          style={{
            transform: `rotateZ(90deg) translateY(${-width / 2 - width / 6}px)`,
          }}
        >
          <Box width={width * 0.5 + "px"} height="10px" stretch="10px" />
        </div>
        <div
          className="right"
          style={{
            transform: `rotateZ(90deg) translateY(${-width / 2 + width / 6}px)`,
          }}
        >
          <Box width={width * 0.5 + "px"} height="10px" stretch="10px" />
          <div
            className="seat"
            style={{ transform: `rotateZ(-90deg) translateZ(${width / 11}px)` }}
          >
            <Box
              width={width / 3 + "px"}
              height="10px"
              stretch={width / 6 + "px"}
            />
            <div
              className="human2"
              style={{
                bottom: `-${width / 25}px`,
                transform: `translateZ(-${width / 15}px) translateX(100%)`,
              }}
            >
              <Human />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swing;
