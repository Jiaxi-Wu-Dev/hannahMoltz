import "./App.css";
import React from "react";
import Window from "./components/Window";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Window
          id="firstWindow"
          style={{ position: "relative", left: "200px" }}
          number={"1"}
        />
        <Window
          id="secondWindow"
          style={{ position: "relative", left: "100px" }}
          number={"2"}
        />
        <Window
          id="thirdWindow"
          style={{ position: "relative", left: "10px" }}
          number={"3"}
        />
      </div>
    );
  }
}

export default App;
