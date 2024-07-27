import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { veryImportantAndComplexCalculation } from "./utils/addTwoNumbers";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          type="number"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
        <input
          type="number"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
        <button
          onClick={() => {
            const newResult = veryImportantAndComplexCalculation(
              number1,
              number2
            );
            setResult(newResult);
          }}
        >
          Calculate
        </button>
        <input type="text" readOnly value={result} />
      </header>
    </div>
  );
}

export default App;
