import React, { useState, useEffect } from "react";
import { key } from "../../container/apiKey";
import axios from "../../axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getBan() {
      await axios
        .get(`popular?api_key=${key}`)
        .then((resp) => setMovies(resp.data.results));
    }
    getBan();
  }, []);
  const mov = movies[Math.floor(Math.random() * 20)];
  if (typeof mov === "undefined") {
    return <div></div>;
  }
  return (
    <div className=" bg-gray-400 h-1px { height: 1px; }">
      <img
        className=" object-cover h-64 opacity-75 w-full"
        src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
        alt="no poster"
      />
    </div>
  );
};

export default Banner;
