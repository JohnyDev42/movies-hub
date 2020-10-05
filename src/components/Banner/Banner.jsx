import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import * as actions from '../../store/actions/index'


const Banner = () => {
  const {nowPlayingMovies} = useSelector(state => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getBan() {
      await dispatch(actions.fetchPopularMovies());
    }
    getBan();
  }, [dispatch]);
  const mov = nowPlayingMovies[Math.floor(Math.random() * 20)];
  if (typeof mov === "undefined") {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div>
      <img
        className="flex object-cover w-full h-96 opacity-75 "
        src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
        alt="no poster"
      />
      </div>
    </div>
  );
};

export default Banner;
