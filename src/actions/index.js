import { ADD_PAINTING_CATEGORY, REMOVE_PAINTING_CATEGORY, ADD_MOVIE, REMOVE_MOVIE, ADD_NEW_MOVIE_WITH_POSITION} from '../constants/actionTypes';
import store from '../store';

let nextMovieId = 3

/**
 * Add a new paintings category.
 *
 * @param { {id: string|number, name: string} } category
 * @returns {{type, payload: {category: {}}}}}
 */
export const addNewPaintingCategory = category => {
    return {
        type: ADD_PAINTING_CATEGORY,
        payload: {
            category
        }
    }
};

/**
 * Remove an existing painting category by a given id.
 *
 * @param { number } categoryId
 * @returns {{type, payload: {categoryId: number}}}
 */
export const removePaintingCategory = categoryId => {
    return {
        type: REMOVE_PAINTING_CATEGORY,
        payload: {
            categoryId
        }
    }
};


export const addNewMovie = movie => {
    const lastPos = Math.max(...store.getState().moviesList.map(o => o.pos), 0);
    return {
        type: ADD_MOVIE,
        payload: {
            movie,
            id: ++nextMovieId,
            pos: lastPos
        }
    }
};

export const addNewMovieWithPosition = (movie, pos) => {
    return {
        type: ADD_NEW_MOVIE_WITH_POSITION,
        payload: {
            movie,
            pos: pos,
            id: ++nextMovieId
        }
    }
};

export const removeMovie = movieId => {
    return {
        type: REMOVE_MOVIE,
        payload: {
            movieId
        }
    }
};
