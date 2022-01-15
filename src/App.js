import React, { Component } from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Listening from './components/listening/Listening';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/listening' element={<Listening />} />
        </Routes>
      </div>
    );
  }
}

export default App;
