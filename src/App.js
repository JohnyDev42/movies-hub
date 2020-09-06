import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React from "react";
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <div className="App">
        <Home/>
        </div>
      </Switch>
    </Router>
    // <div className="flex  justify-center">
    //   <h1 className=" animate__animated animate__bounce animate__infinite	infinite">An animated element</h1>
    // </div>
  );
}

export default App;
