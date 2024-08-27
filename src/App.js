import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ResetBtn from "./components/ResetBtn";

function App() {
  return (
    <div className="container">
      <h3>Increament & Decreament</h3>
      <Counter></Counter>
    </div>
  );
}

export default App;
