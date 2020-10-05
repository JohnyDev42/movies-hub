import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Link} from "react-router-dom";
import axios from "../../axios";
import { key } from "../apiKey";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  let { name } = useParams();
  useEffect(() => {
    axios.get(`/search/movie?api_key=${key}&query=${name}`).then((resp) => {
      console.log(resp);
      setSearchResults(resp.data.results);
    });
  }, []);
  console.log(searchResults);
  
  const resultset = (result) => {
    return result.map((movie) => {
      return (
        <Link to={`/movieinfo/${movie.id}`} >
        <div className="px-20 py-2 flex shadow-lg rounded-lg transition duration-500 ease-in-out transform  hover:scale-110 ">          
          <img
            className="rounded-lg h-40 z-10 "
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={"/assets/profile.jpg"} 
          />
          
          <div className="p-3">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
          </div>
        </div>
        </Link>
      );
    });
  };
  const movieList = resultset(searchResults);
  if (typeof searchResults === "undefined") {
    return <div>Loading...</div>;
  }
  return <div>{movieList}</div>;
};

export default Search;
