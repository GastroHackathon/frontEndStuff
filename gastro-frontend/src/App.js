import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './MainComponent.js'

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <div className='container'>
        <div className="col-6 offset-3">
          <div className="jumbotron">
            <MainComponent></MainComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
