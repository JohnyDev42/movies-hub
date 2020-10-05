import React, { useState } from "react";
import { withRouter,useHistory} from "react-router-dom";
import "./Navbar.css";

const Navbar =(props) => {
  const [click, setClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const clickHandler = () => setClick(!click);

  const changeHandler = (event) =>{
    setSearchTerm(event.target.value);
  }
  const searchSubmit = (event) => {
    console.log("Submitted");
    console.log(searchTerm);

    history.push(`/search/${searchTerm}`)
  }
  return (
    <div>
      <nav className="flex flex-col sm:flex-row bg-blue-800 pl-5">
        <div className="sm:w-1/4 md:w-1/3 p-4 m-1 flex justify-between">
          <a className="text-xl text-white" href="/">MovieTorrent</a>
          <button className="sm:hidden text-white focus:outline-none" onClick={clickHandler}>
            MENU
          </button>
        </div>
        <div
          className={`${
            click ? "flex" : "hidden"
          }  sm:w-3/4 md:w-2/3 sm:flex  flex-col sm:flex-row justify-end`}>
          <div className=" sm:order-last m-1">
            <form onSubmit={searchSubmit}>
            <input
              className="bg-gray-400 p-2 my-2 rounded-l-lg outline-none focus:bg-gray-200"
              placeholder="search" type="text" onChange={changeHandler}
            />
            <button type="submit" className="bg-gray-400 p-2 my-2 rounded-r-lg focus:outline-none" onClick={searchSubmit}>
              <i class="fa fa-search"></i>
            </button>
            </form>
          </div>
          <ul className="justify-center m-1">
            <li className="sm:inline-flex p-4 text-white font-semibold">
              <a href="/">Home</a>
            </li>
            <li className="sm:inline-flex p-4 text-white font-semibold">
              <a href="/">Movies</a>
            </li>
            <li className="sm:inline-flex p-4 text-white font-semibold">
              <a href="/">Series</a>
            </li>
            <li className="sm:inline-flex p-4 text-white font-semibold">
              <a href="/">People</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
