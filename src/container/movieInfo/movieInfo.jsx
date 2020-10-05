import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { key } from "../apiKey";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState({ poster_path: "" });
  useEffect(() => {
    axios.get(`/movie/${movie_id}?api_key=${key}`).then((resp) => {
      console.log(resp);
      setMovieInfo(resp.data);
    });
  }, []);
  let { movie_id } = useParams();
  console.log(props);
  var sectionStyle = {
    backgroundImage:
      "url(" +
      `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}` +
      ")",
  };
  return (
    <div className="h-screen bg-fixed bg-gradient-to-b from-red-900 to-indigo-900" >
      <div className="flex justify-around ">
        <div className=" pt-8 pl-32 flex-none">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            className="w-32 rounded-lg md:w-64 lg:w-74"
          />
        </div>
        <div className="flex flex-col pl-8  items-start justify-end flex-wrap">
          <div>
            <h1 className="text-white text-3xl">{movieInfo.title}</h1>
          </div>
          <div className="flex flex-col items-start pb-40">
            <h1 className="text-white ">Overview</h1>
            <p className="text-white text-left pt-2">{movieInfo.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
