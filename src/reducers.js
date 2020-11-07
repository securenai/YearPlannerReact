import {CREATE_DAY_PLANNER, UPDATE_DAY_PLANNER} from './actions';

import {CREATE_SELECTED_YEAR, UPDATE_SELECTED_YEAR} from './actions';

import {CREATE_SELECTED_MONTH, UPDATE_SELECTED_MONTH} from './actions';

import {CREATE_SELECTED_DAY, UPDATE_SELECTED_DAY} from './actions';

import {CREATE_DESTINATION, UPDATE_DESTINATION} from './actions';

export const dayPlanner = (state = [], action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_DAY_PLANNER: {
			console.log('CREATE_DAY_PLANNER');
			const newState = payload;
			return newState;
		}
		case UPDATE_DAY_PLANNER: {
			console.log('UPDATE_DAY_PLANNER');
			// console.log(payload);
			const newState = payload;
			return newState;
		}
		default:
			// console.log('default');
			return state;
	}
};

export const selectedYear = (state = [], action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_SELECTED_YEAR: {
			console.log('CREATE_SELECTED_YEAR');
			const newState = payload;
			return newState;
		}
		case UPDATE_SELECTED_YEAR: {
			console.log('UPDATE_SELECTED_YEAR');
			// console.log(payload);
			const newState = payload;
			return newState;
		}
		default:
			// console.log('default');
			return state;
	}
};

export const selectedMonth = (state = [], action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_SELECTED_MONTH: {
			console.log('CREATE_SELECTED_MONTH');
			const newState = payload;
			return newState;
		}
		case UPDATE_SELECTED_MONTH: {
			console.log('UPDATE_SELECTED_MONTH');
			// console.log(payload);
			const newState = payload;
			return newState;
		}
		default:
			// console.log('default');
			return state;
	}
};

export const selectedDate = (state = [], action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_SELECTED_DAY: {
			console.log('CREATE_SELECTED_DAY');
			const newState = payload;
			return newState;
		}
		case UPDATE_SELECTED_DAY: {
			console.log('UPDATE_SELECTED_DAY');
			// console.log(payload);
			const newState = payload;
			return newState;
		}
		default:
			// console.log('default');
			return state;
	}
};

export const destination = (state = [], action) => {
	const {type, payload} = action;

	switch (type) {
		case CREATE_DESTINATION: {
			console.log('CREATE_DESTINATION');
			const newState = payload;
			return newState;
		}
		case UPDATE_DESTINATION: {
			console.log('UPDATE_DESTINATION');
			// console.log(payload);
			const newState = payload;
			return newState;
		}
		default:
			// console.log('default');
			return state;
	}
};
