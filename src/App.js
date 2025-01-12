import "./App.css";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <div className="human">
        <div className="head">
          <Box width="50px" height="50px" />
        </div>
        <div className="body">
          <div className="left-hand">
            <Box width="20px" height="100px" />
          </div>
          <div className="right-hand">
            <Box width="20px" height="100px" />
          </div>
          <div className="chest">
            <Box width="50px" height="100px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
