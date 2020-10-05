import { Route, Switch } from 'react-router-dom';
import React from "react";
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Movieinfo from './container/movieInfo/movieInfo'
import Search from './container/search/search'
import './App.css'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      {/* <Demo/> */}
      
      <ScrollToTop/>
      <Navbar />
      <div className="App bg-gradient-to-b from-red-900 to-indigo-900">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movieinfo/:movie_id" exact component={Movieinfo} />
      <Route path="/search/:name" exact component={Search} />
      </Switch>
      <Footer/>
      </div>
      </>
    // <div className="flex  justify-center">
    //   <h1 className=" animate__animated animate__bounce animate__infinite	infinite">An animated element</h1>
    // </div>
  );
}

export default App;
