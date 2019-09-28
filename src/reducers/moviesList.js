import {
    ADD_MOVIE,
    REMOVE_MOVIE
} from '../constants/actionTypes';

const moviesList = (state = [], action) => {
    switch(action.type) {
        case ADD_MOVIE:
            return [
                ...state,
                action.payload.movie
            ];
        case REMOVE_MOVIE:
            return state.filter((movie, index) => movie.id !== action.payload.movieId);
        default:
            return state;
    }
};

export default moviesList;
