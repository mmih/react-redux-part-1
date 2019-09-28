import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import moviesList from './moviesList';


const rootReducer = combineReducers({
    paintingsCategoriesList,
    moviesList
});

export default rootReducer;
