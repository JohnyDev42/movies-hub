import * as actionTypes from './actionTypes'
import axios from '../../axios'
import {key} from '../../container/apiKey'

const setFavMovies = ( movies)=>{
    console.log(movies);

  return {
    type: actionTypes.FETCH_POPULAR_MOVIES,
    movies: movies,
  };
}
export const fetchPopularMovies= ()=>{
    return (dispatch) => {
        axios.get(`popular?api_key=${key}`)
        .then((resp) => dispatch(setFavMovies(resp.data.results)))
        .catch(err=>console.log(err));
    }
    }
