import "./App.css";
import { useState, useEffect } from "react";
import Human from "./components/Human/Human";
import Swing from "./components/Swing/Swing";
import Box from "./components/Box/Box";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log(width);
    }, []);
  return (
    <div className="App">
      <div className="abs2"></div>
      <div className="abs" style={{width: width/1.5 + 'px', height: width + 'px'}}></div>
      <div className="all" style={{width: width + 'px'}}>
        <Swing />
      </div>
    </div>
  );
}

export default App;
