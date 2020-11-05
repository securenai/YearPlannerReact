import {createStore, combineReducers} from 'redux';
import {plannerData} from './components/Planner/reducers';

const reducers = {plannerData}; // this is where we will put all our reducers

const rootReducer = combineReducers(reducers); // put our reducers in a form that we can pass to the create store function that we imported

export const configureStore = () => createStore(rootReducer);
