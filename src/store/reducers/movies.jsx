import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    popularMovies:[],
    nowPlayingMovies:[]
}

const setPopularMovies = ( state, action) => {
    return {...state,popularMovies:action.movies}
}
const setNowPlayingMovies = ( state, action) => {
    return {...state,nowPlayingMovies:action.movies}
}
const reducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_POPULAR_MOVIES:return setPopularMovies(state,action);
        case actionTypes.FETCH_NOW_PLAYING_MOVIES:return setNowPlayingMovies(state,action);

        default:
            return state;
    }
}

export default reducer;                     