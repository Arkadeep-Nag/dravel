// store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import {thunk} from 'redux-thunk';
import firebase from '../config/firebaseConfig';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // Add other reducers here
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // Add Redux DevTools extension if needed
  )
);

export default store;
