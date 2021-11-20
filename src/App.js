import "./App.css";
import Window from "./components/Window";

function App() {
  return (
    <div className="App">
      <Window
        className="firstWindow"
        number={"1"}
        style={{ width: "300px", height: "150px" }}
      />
      <Window id="secondWindow" number={"2"} />
      <Window id="thirdWindow" number={"3"} />
    </div>
  );
}

export default App;
