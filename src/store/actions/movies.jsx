import * as actionTypes from './actionTypes'
import axios from '../../axios'
import {key} from '../../container/apiKey'

const setPopMovies = ( movies)=>{
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES,
    movies: movies,
  };
}
const setNowPlayingMovies = ( movies)=>{
  return {
    type: actionTypes.FETCH_NOW_PLAYING_MOVIES,
    movies: movies,
  };
}

export const fetchNowPlayingMovies= ()=>{
  return (dispatch) => {
      axios.get(`/movie/now_playing?api_key=${key}`)
      .then((resp) => dispatch(setNowPlayingMovies(resp.data.results)))
      .catch(err=>console.log(err));
  }
}

export const fetchPopularMovies= ()=>{
    return (dispatch) => {
        axios.get(`/movie/popular?api_key=${key}`)
        .then((resp) => dispatch(setPopMovies(resp.data.results)))
        .catch(err=>console.log(err));
    }
    }
