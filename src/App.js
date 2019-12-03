import React, { useEffect } from 'react';
import axios from 'axios'

import {text} from './day1-1'
import logo from './logo.svg';
import './App.css';

function App() {
//3337766
  // const obj = text.trim().split('\n')
  const obj = [3, 11, 14]
  console.log(obj)

  const result = obj.map(( item ) => {
    let elem = 0
    (function recFuel(item){
      item = Math.floor(item/3) - 2
      console.log(123123123)
      if (item > 0){ 
        elem += item
        return recFuel(item)
      } else return
    })()

    console.log(elem)
    return elem
  } ).reduce((sum, current) => sum + current )

  console.log(result)
  
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
