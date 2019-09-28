import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movie from './Movie';
import { addNewMovie, removeMovie } from '../actions';

const MoviesList = ({movies, addMovie, removeMovie}) => {
    const _addNewMovie = (movie) => {
 
        const initMovies = ['Skyfall', 'Casino Royale', 'Quantum of solace', 'Spectre', 'No time to die'];
        const rand = initMovies[Math.floor(Math.random() * initMovies.length)];

        const newMovie = {
            id: movies.length + 1,
            name: rand
        };

        addMovie(newMovie);
    };


    const removeExistingMovie = movieId => removeMovie(movieId);

    return <React.Fragment>
        <ul>
            {
                movies.map((movie, index) =>
                    <Movie key={index}
                                      movie={movie}
                                      removeMovie={removeExistingMovie}
                    />
                )
            }
        </ul>
        <button className="add-btn" onClick={_addNewMovie}>AddMovie</button>
    </React.Fragment>;
};

MoviesList.defaultProps = {
    movies: []
};

MoviesList.propTypes = {
    movies: PropTypes.array,
    addMovie: PropTypes.func,
    removeMovie: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: movie => dispatch(addNewMovie(movie)),
        removeMovie: movieId => dispatch(removeMovie(movieId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
