import {createStore, combineReducers} from 'redux';
import {dayPlanner} from './reducers';
import {selectedYear} from './reducers';
import {selectedMonth} from './reducers';
import {selectedDate} from './reducers';
import {destination} from './reducers';

const reducers = {
	dayPlanner,
	selectedYear,
	selectedMonth,
	selectedDate,
	destination,
}; // this is where we will put all our reducers

const rootReducer = combineReducers(reducers); // put our reducers in a form that we can pass to the create store function that we imported

export const configureStore = () => createStore(rootReducer);
