import React, { useState, useEffect } from "react";
import Box from "../Box/Box";

const Human = () => {
  const [width, setWidth] = useState(window.innerWidth / 27);
  const handleResize = () => {
    setWidth(window.innerWidth / 27);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(width);
  }, []);

  return (
    <div>
      <div className="human">
        <div className="head">
          <Box
            width={width + "px"}
            height={width + "px"}
            stretch={(width / 5) * 3 + "px"}
            faceImage={true}
            hair={true}
          />
        </div>
        <div className="neck">
          <Box
            width={width / 2 + "px"}
            height={(width / 5) * 1.5 + "px"}
            stretch={width / 5 + "px"}
          />
        </div>
        <div className="body" style={{ height: `${width * 2}px` }}>
          <div className="left-hand">
            <div className="arm">
              <Box
                width={width / 2.5 + "px"}
                height={width + "px"}
                stretch={width / 2.5 + "px"}
              />
              <div className="hand">
                <Box
                  width={width / 2.5 + "px"}
                  height={width * 1.1 + "px"}
                  stretch={width / 2.5 + "px"}
                />
              </div>
            </div>
          </div>
          <div className="chest">
            <Box
              width={width * 1.1 + "px"}
              height={width * 2 + "px"}
              stretch="20px"
            />
          </div>
          <div className="right-hand">
            <div className="arm">
              <Box width={width/2.5 + 'px'} height={width + "px"} stretch={width/2.5 + 'px'} />
              <div className="hand">
                <Box width={width/2.5 + 'px'} height={width * 1.1 + 'px'} stretch={width/2.5 + 'px'} />
              </div>
            </div>
          </div>
        </div>
        <div className="top-legs">
          <Box width={width/2.5 + 'px'} height={width * 1.1 + "px"} stretch={width/2.5 + 'px'} />
          <Box width={width/2.5 + 'px'} height={width * 1.1 + "px"} stretch={width/2.5 + 'px'} />
          <div className="bottom-legs" style={{height: width * 1.1 + "px"}}>
            <Box width={width/2.5 + 'px'} height={width * 1.1 + "px"} stretch={width/2.5 + 'px'} />
            <Box width={width/2.5 + 'px'} height={width * 1.1 + "px"} stretch={width/2.5 + 'px'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Human;
