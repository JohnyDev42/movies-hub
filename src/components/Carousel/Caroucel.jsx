import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { key } from "../../container/apiKey";
import axios from '../../axios'

let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    draggable:true,
    autoplay:true,
};
export const Carousel = () => {
  const [movies, setMovies] = useState([]);
  useEffect( () => {

    async function data(){
     await axios.get(`/popular?api_key=${key}`)
      .then(resp=>setMovies(resp.data.results))
    }
    data();
  }, []);
  const movielist = movies.map((movie) => {
    return (

      <div className="max-w-sm rounded-md overflow-hidden shadow-lg px-1" key={movie.id}>
        <div className="h-2/4 z-10">
          <img
            className="w-full h-auto z-0 rounded-md"
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt="no poster"
          />
        </div>
        <div className="h-2/4 px-6 py-4 justify-center z-20">
          <div className="z-30 font-semibold text-md mb-2 text-blue-700 hover:text-blue-500 sm:text-sm">
            {movie.title}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto p-2">
      <Slider {...settings}>{movielist}</Slider>
    </div>
  );
};
