import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    movies:null
}

const fetchPopularMovies = ( state, action) => {
    return {...state,movies:action.movies}
}
const reducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_POPULAR_MOVIES:return fetchPopularMovies(state,action);
    
        default:
            return state;
    }
}

export default reducer;                     