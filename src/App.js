import "./App.css";
import Human from "./components/Human/Human";
import Swing from "./components/Swing/Swing";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <div className="abs"></div>
      <div className="all">
        <Swing />
      </div>
    </div>
  );
}

export default App;
