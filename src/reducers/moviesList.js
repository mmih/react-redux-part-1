import {
    ADD_MOVIE,
    REMOVE_MOVIE,
    ADD_NEW_MOVIE_WITH_POSITION
} from '../constants/actionTypes';

const moviesList = (state = [], action) => {
    switch(action.type) {
        case ADD_MOVIE:
            return [
                ...state,
                {
                    name: action.payload.movie.name,
                    pos: action.payload.pos,
                    id: action.payload.id
                }
            ];
        case REMOVE_MOVIE:
            return state.filter((movie, index) => movie.id !== action.payload.movieId);
        case ADD_NEW_MOVIE_WITH_POSITION:
            return [
                ...state,
                {
                    name: action.payload.movie.name,
                    pos: action.payload.pos,
                    id: action.payload.id
                }
            ];
        default:
            return state;
    }
};

export default moviesList;
