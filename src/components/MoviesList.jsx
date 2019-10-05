import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movie from './Movie';
import { addNewMovie, removeMovie, addNewMovieWithPosition } from '../actions';

const MoviesList = ({movies, addMovie, removeMovie, addMovieWithPosition}) => {
    const addRandomMovie = (movie) => {
 
        const initMovies = ['Skyfall', 'Casino Royale', 'Quantum of solace', 'Spectre', 'No time to die'];
        const rand = initMovies[Math.floor(Math.random() * initMovies.length)];
        const newMovie = {
            name: rand
        };

        addMovie(newMovie);
    };

    let movie;
    let pos;

    const addNewMovie = (e) => {
        if (movie.value.trim() != "") {
            const newMovie = {
                name: movie.value.trim()
            };
            addMovie(newMovie);
        }
    };

    const addMovieWithPos = (e) => {
        if (movie.value.trim() != "" && pos) {
            const newMovie = {
                name: movie.value.trim()
            };
            addMovieWithPosition(newMovie, parseInt(pos.value));
        }
    }


    const removeExistingMovie = movieId => removeMovie(movieId);

    return <React.Fragment>
        <ul>
            {
                movies.sort(function(a, b) { 
                    return a.pos - b.pos;
                }).map((movie, index) =>
                    <Movie key={index}
                        movie={movie}
                        removeMovie={removeExistingMovie}
                    />
                )
            }
        </ul>
        <button className="add-btn" onClick={addRandomMovie}>Add Random Movie</button>
        <br />
        <input type="text" ref={node => (movie = node)} />
        <button type="submit" onClick={addNewMovie}>
            Add Movie
        </button>
        <br />
        <input type="number" ref={node => (pos = node)} />
        <button type="submit" onClick={addMovieWithPos}>
            Add Movie With Position
        </button>
    </React.Fragment>;
};

MoviesList.defaultProps = {
    movies: []
};

MoviesList.propTypes = {
    movies: PropTypes.array,
    addMovie: PropTypes.func,
    removeMovie: PropTypes.func,
    addMovieWithPosition: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.moviesList.sort(function(a, b) { 
            return a.pos - b.pos;
        })
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: movie => dispatch(addNewMovie(movie)),
        removeMovie: movieId => dispatch(removeMovie(movieId)),
        addMovieWithPosition: (movie, pos) => dispatch(addNewMovieWithPosition(movie, pos))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
