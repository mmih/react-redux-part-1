import React from 'react';
import './App.css';

import PaintingCategoriesList from './components/PaintingCategoriesList';
import MoviesList from './components/MoviesList';

function App() {
    return (
        <div className="app">
            <MoviesList/>
        </div>
    );
}

export default App;
