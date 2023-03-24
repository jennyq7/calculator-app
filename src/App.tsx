import React from 'react';
import './App.scss';
import { useState } from 'react';

function App() {

  //set up useStates for calc and result
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops: string[] = ['/', '*', '+', '-', '.'];

  //function to update the value entered and the exceptions to this
  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  //function to use for loop to return the numbers 1 to 9
  const createDigits = () => {
    let digits: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>[] = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="digits__buttons" key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits;
  }

  //function to display the calculated value and convert it to a string
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  //function to delete the last item on the display and to recalculate the result value
  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value: string = calc.slice(0, -1);
    setCalc(value);

    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0, -1)))
    }
    else {
      setResult(eval(value.toString()))
    }
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="display">
          {result ? <span className="display__span">{result}</span> : ""} {calc || "0"}
        </div>

        <div className="operators">
          <button className="operators__buttons" onClick={() => updateCalc('/')}>/</button>
          <button className="operators__buttons" onClick={() => updateCalc('*')}>*</button>
          <button className="operators__buttons" onClick={() => updateCalc('+')}>+</button>
          <button className="operators__buttons" onClick={() => updateCalc('-')}>-</button>

          <button className="operators__buttons" onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          <>{createDigits()}</>
          <button className="digits__buttons" onClick={() => updateCalc('0')}>0</button>
          <button className="digits__buttons" onClick={() => updateCalc('.')}>.</button>

          <button className="digits__buttons" onClick={calculate}>=</button>
        </div>



      </div>
    </div>
  );
}

export default App;
