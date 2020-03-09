import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeEvery, put } from "redux-saga/effects";
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('EDIT_MOVIES', editMovies);
    yield takeEvery('GET_GENRES', getGenres);
}

function* getMovies(){
    const showMovie = yield Axios.get('/display');
    console.log('this saga came from display /GET: ', showMovie.data)
    yield put({type: 'SET_MOVIES', payload: showMovie.data})
}

function* editMovies(edit){
    console.log('hi from editMovies in index: ', edit.payload, 'send ID', edit.payload.sendId);
  try {
    yield Axios.put(`/edit/${edit.payload.sendId}`, edit.payload);
    yield put({type: 'FETCH_MOVIES'});
  } catch (error) {
    console.log('error fetching movies', error);
  }
}

function* getGenres(id) {
  const showGenre = yield Axios.get(`/display/${id}/genres`);
  console.log("this saga came from display/GET bringing: ", showGenre.data);
  yield put({ type: "SET_MOVIES", payload: showGenre.data });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
