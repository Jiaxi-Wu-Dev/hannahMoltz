import "./App.css";
import Window from "./components/Window";

function App() {
  return (
    <div className="App">
      <Window className="tiles" number={"1"} />
      <Window className="tiles" number={"2"} />
      <Window className="tiles" number={"3"} />
    </div>
  );
}

export default App;
