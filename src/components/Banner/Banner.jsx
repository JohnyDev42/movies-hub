import React, { useState, useEffect } from "react";
import { key } from "../../container/apiKey";
import axios from "../../axios";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getBan() {
      await axios
        .get(`popular?api_key=${key}`)
        .then((resp) => setMovies(resp.data.results))
        .catch(err=>console.log(err));
    }
    getBan();
  }, []);
  const mov = movies[Math.floor(Math.random() * 20)];
  if (typeof mov === "undefined") {
    return <div>Loading...</div>;
  }
  return (
    <div className=" border border-black px-5 rounded-lg overflow-hidden ">
      <div>
      <img
        className="flex object-cover w-full h-96 opacity-75  rounded-md"
        src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
        alt="no poster"
      />
      </div>
    </div>
  );
};

export default Banner;
