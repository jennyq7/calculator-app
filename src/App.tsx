import React from 'react';
import './App.scss';

function App() {

  const createDigits = () => {
    let digits : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>[] = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="digits__buttons" key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="display">
          <span className="display__span">(0)</span> 0
        </div>

        <div className="operators">
          <button className="operators__buttons">/</button>
          <button className="operators__buttons">*</button>
          <button className="operators__buttons">+</button>
          <button className="operators__buttons">-</button>

          <button className="operators__buttons">DEL</button>
        </div>

        <div className="digits">
          <>{ createDigits() }</>
          <button className="digits__buttons">0</button>
          <button className="digits__buttons">.</button>
          <button className="digits__buttons">=</button>
        </div>



      </div>
    </div> 
  );
}

export default App;
