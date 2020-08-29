import React from "react";
import "./Navbar.css";
const Nav = () => {
  return (
    <ul className="flex text-gray-300 mx-3">
      <li className="pr-5">
        <a href="/One"> Movies </a>
      </li>
      <li className="pr-5">
        <a href="/One">Series</a>
      </li>
      <li className="pr-5">
        <a href="/One">About</a>
      </li>
      <li>
        <a href="/One">Contact</a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className=" mx-auto bg-gray-900 p-5 h-20">
      <nav className="flex justify-between md:justify-start">
        <div>
          <a className="text-gray-300" href="/One">
            Logo
          </a>
        </div>
        <div className="hidden sm:flex">
          <Nav />
        </div>
        <div className="flex sm:hidden">
          <div className="dropdown inline-block relative hover:block">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">MENU</span>
            </button>
            <ul className="dropdown-menu  absolute hidden text-gray-700 pt-1 hover:block">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/One">
                  One
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/One">
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/One">
                  Three is the magic number
                </a>
              </li>
              <div className="flex">
                <div>Login</div>
                <div>SignUp</div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-10"></div>
    </div>
  );
};

export default Navbar;
