import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import "./Swing.css";
import Human from "../Human/Human";

const Swing = () => {
  const [width, setWidth] = useState(window.innerWidth / 2);
  const handleResize = () => {
    setWidth(window.innerWidth / 2);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Width", width);
  }, []);
  return (
    <div
      className="swing"
      style={{
        height: Math.abs(Math.cos(15) * width) + "px",
        marginLeft: Math.abs(Math.sin(15) * width),
      }}
    >
      <div className="horizontal">
        <Box width={width + "px"} height={width / 50 + "px"} stretch={width / 16 + "px"} />
      </div>
      <div className="stands">
        <div className="stand1">
          <Box width={width * 0.9 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"} />
        </div>
        <div className="stand2">
          <Box width={width * 0.9 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"} />
        </div>
      </div>
      <div
        className="stands-two"
        style={{
          transform: `rotateZ(90deg) translateY(calc(${-width}px)) `,
        }}
      >
        <div className="stand1">
          <Box width={width * 0.9 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"} />
        </div>
        <div className="stand2">
          <Box width={width * 0.9 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"} />
        </div>
      </div>
      <div className="rope">
        <div
          className="left"
          style={{
            transform: `rotateZ(90deg) translateY(${-width / 2 - width / 6}px)`,
          }}
        >
          <Box width={width * 0.5 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"}/>
        </div>
        <div
          className="right"
          style={{
            transform: `rotateZ(90deg) translateY(${-width / 2 + width / 6}px)`,
          }}
        >
          <Box width={width * 0.5 + "px"} height={width / 16 + "px"} stretch={width / 50 + "px"} />
          <div
            className="seat"
            style={{ transform: `rotateZ(-90deg) translateZ(${width / 11}px)` }}
          >
            <Box
              width={width / 3 + "px"}
              height={width / 50 + "px"}
              stretch={width / 6 + "px"}
            />
            <div
              className="human2"
              style={{
                bottom: `-${width / 25}px`,
                transform: `translateZ(-${width / 15}px) translateX(${
                  width > 450 ? width / 25 : -10
                }px)`,
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
