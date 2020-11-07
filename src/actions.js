export const CREATE_DAY_PLANNER = 'CREATE_DAY_PLANNER';
export const UPDATE_DAY_PLANNER = 'UPDATE_DAY_PLANNER';

export const CREATE_SELECTED_YEAR = 'CREATE_SELECTED_YEAR';
export const UPDATE_SELECTED_YEAR = 'UPDATE_SELECTED_YEAR';

export const CREATE_SELECTED_MONTH = 'CREATE_SELECTED_MONTH';
export const UPDATE_SELECTED_MONTH = 'UPDATE_SELECTED_MONTH';

export const CREATE_SELECTED_DAY = 'CREATE_SELECTED_DAY';
export const UPDATE_SELECTED_DAY = 'UPDATE_SELECTED_DAY';

export const CREATE_DESTINATION = 'CREATE_DESTINATION';
export const UPDATE_DESTINATION = 'UPDATE_DESTINATION';

// the actual action the that our components can dispatch
export const createDayPlanner = (dayPlanner) => ({
	type: CREATE_DAY_PLANNER,
	payload: dayPlanner,
});
export const updateDayPlanner = (dayPlanner) => ({
	type: UPDATE_DAY_PLANNER,
	payload: dayPlanner,
});

export const createSelectedYear = (year) => ({
	type: CREATE_SELECTED_YEAR,
	payload: year,
});
export const updateSelectedYear = (year) => ({
	type: UPDATE_SELECTED_YEAR,
	payload: year,
});

export const createSelectedMonth = (month) => ({
	type: CREATE_SELECTED_MONTH,
	payload: month,
});
export const updateSelectedMonth = (month) => ({
	type: UPDATE_SELECTED_MONTH,
	payload: month,
});

export const createSelectedDay = (day) => ({
	type: CREATE_SELECTED_DAY,
	payload: day,
});
export const updateSelectedDay = (day) => ({
	type: UPDATE_SELECTED_DAY,
	payload: day,
});

export const createDestination = (d) => ({
	type: CREATE_DESTINATION,
	payload: d,
});
export const updateDestination = (d) => ({
	type: UPDATE_DESTINATION,
	payload: d,
});
