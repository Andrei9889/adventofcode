import React, {  } from 'react';

import { text } from './day1-1';
import logo from './logo.svg';
import './App.css';

function App() {
  const obj = text.trim().split('\n');
  // const obj = [174, 122, 178, 2]
  console.log(obj)

  const dividedArray = obj.map(item => {
    let resultMass = 0

    function recFuel(fuel){
      let mass =  Math.floor(fuel / 3) - 2;
      if(mass > 0){
        resultMass += mass
        recFuel(mass)
      } else return
    }

    recFuel(item)

    return resultMass;
  });

  console.log(dividedArray)

  const amountOfFuel = dividedArray.reduce((summ, current) => summ + current )

  console.log(amountOfFuel) //3337766

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
      </header>
    </div>
  );
}

export default App;
