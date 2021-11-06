
import './App.css';
import Window from './components/Window'
import JiaxiHooks from './components/JiaxiHooks'

function App() {

  const firstWindowStyles = {
    position:"relative", 
    top:"-60px",
    left:"35px",
    zIndex:"1"
  }
  return (
    <div className="App">
      <Window className="firstWindow" number={"1"} style={firstWindowStyles}/>
      <Window id="secondWindow" number={"2"}/>
      <Window id="thirdWindow" number={"3"}/>
      <JiaxiHooks />
    </div>
  );
}

export default App;
