import React from 'react'
import Box from "../Box/Box";


const Human = () => {
  return (
    <div>
        <div className="human">
        <div className="head">
          <Box width="50px" height="50px" stretch="30px" />
        </div>
        <div className="neck">
          <Box width="20px" height="15px" stretch="10px" />
        </div>
        <div className="body">
          <div className="left-hand">
            <div className="arm">
              <Box width="19px" height="50px" stretch="20px" />
              <div className="hand">
                <Box width="20px" height="60px" stretch="20px" />
              </div>
            </div>
          </div>
          <div className="chest">
            <Box width="60px" height="100px" stretch="20px" />
          </div>
          <div className="right-hand">
            <div className="arm">
              <Box width="20px" height="50px" stretch="20px" />
              <div className="hand">
                <Box width="20px" height="60px" stretch="20px" />
              </div>
            </div>
          </div>
        </div>
        <div className="legs">
          <Box width="20px" height="60px" stretch="20px" />
          <Box width="20px" height="60px" stretch="20px" />
        </div>
        <div className="legs">
          <Box width="20px" height="60px" stretch="20px" />
          <Box width="20px" height="60px" stretch="20px" />
        </div>
      </div>
    </div>
  )
}

export default Human