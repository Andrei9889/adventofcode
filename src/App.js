import React, {  } from 'react';

import {day1} from './days/day1/index'
import {day2} from './days/day2/index'
import {day3} from './days/day3/index'
import {day4} from './days/day4/index'

import logo from './logo.svg';
import './App.css';

function App() {

// day1() 
// day2()
// day3()
day4()
  


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
