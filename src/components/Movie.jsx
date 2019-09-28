import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie, removeMovie}) => {
    return <li>
        <a href="#" data-id={movie.id}>{movie.name}</a>
        <button onClick={() => removeMovie(movie.id) }>Remove</button>
    </li>;
};

Movie.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
    }),
    removeMovie: PropTypes.func
};

export default Movie;
