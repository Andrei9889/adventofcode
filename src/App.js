import React, {  } from 'react';

import {day1} from './days/day1/index'
import {day2} from './days/day2/index'

import logo from './logo.svg';
import './App.css';

function App() {

day1() //day1-1: 3337766, day1-2: 5003788
day2() //day2-1: 5110675 
  


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
