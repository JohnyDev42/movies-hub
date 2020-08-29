import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { Carousel } from "../Carousel/Caroucel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
    </div>
  );
};

export default Home;
