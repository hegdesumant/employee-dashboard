import { createStore } from 'redux';
import { appRedcers } from '../reducers/reducers'
const initialState = {

};

export const store = createStore(
    appRedcers,
    initialState
);