import { ADD_PAINTING_CATEGORY, REMOVE_PAINTING_CATEGORY, ADD_MOVIE, REMOVE_MOVIE } from '../constants/actionTypes';

let nextMovieId = 0

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
    return {
        type: ADD_MOVIE,
        payload: {
            movie
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
