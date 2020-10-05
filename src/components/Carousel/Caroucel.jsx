import React, {  useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/index'
import {  Link} from "react-router-dom";
import './Caroucel.css';


let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    draggable:true,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
};
const movieSet = ( popularMovies) => {
  return popularMovies.map((movie) => {
    
    return (
      <div className="">
      <Link to={`/movieinfo/${movie.id}`} >
      <div className="p-2"  key={movie.id}>
        <div className="pt-1">
          <img 
            className="rounded-lg z-10 transition duration-500 ease-in-out transform  hover:scale-110 "
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt="no poster"
          />
        </div>
        {/* <div className="h-2/4 px-6 py-4 justify-center z-20">
          <div className="z-30 font-semibold text-md mb-2 text-blue-700 hover:text-blue-500 sm:text-sm">
            {movie.title}
          </div>
        </div> */}
      </div>
      </Link>
      </div>
    );
  });
}
export const Carousel = () => {
  const {popularMovies,nowPlayingMovies} = useSelector(state => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getBan() {
      await dispatch(actions.fetchPopularMovies());
      await dispatch(actions.fetchNowPlayingMovies());
    }
    getBan();
  }, [dispatch]);
  const popularMovielist = movieSet(popularMovies);
  const nowPlayingMovielist= movieSet(nowPlayingMovies);

  return (
    <div className={`container mx-auto p-2 mt-2 pt-2 `}>
      <Slider {...settings}  >{popularMovielist}</Slider>
      <Slider  {...settings}>{nowPlayingMovielist}</Slider>
    </div>
  );
};
