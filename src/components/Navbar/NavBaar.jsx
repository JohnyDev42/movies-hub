import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../../assets/logo3.png";

const NavBar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const onClickHandlerClose = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className="relative " onClick={onClickHandlerClose}>
      <header className="bg-indigo-900 flex justify-between">
        <div className="flex flex-row justify-between px-4 py-5">
          <div className="flex items-center">
            <a href="/" className="grid justify-center ml-10 w-1/3">
              <h1 className="font-serif  text-2xl text-red-600 font-medium" style={{fontFamily:'Arizonia'}}>
                MovieTorrent
              </h1>
            </a>
          </div>
          <div className=" absolute right-0 w-48 pr-1 sm:hidden ">
            <button
              onClick={onClickHandler}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none ">
              <FontAwesomeIcon
                icon={faBars}
                className={!isOpen ? "text-white text-xl" : "hidden"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={isOpen ? "text-white text-xl" : "hidden"}
              />
            </button>
          </div>
        </div>

        <ul
          className={
            isOpen
              ? " z-50 rounded-lg right-0 absolute pt-2 pb-4 w-48 bg-green-600 block animate__animated animate__zoomIn "
              : "hidden sm:flex sm:justify-between sm:items-center"
          }>
          <li>
            <a
              href="#"
              className="block sm:mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
              Movies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
              Web Series
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
              More
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
