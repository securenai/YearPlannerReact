import React, {useState, useEffect} from 'react';
import CalenderUtils from '../../utils/CalenderUtils';
import Overview from '../Overview/Overview';
import Planner from '../Planner/Planner';

import {connect} from 'react-redux';
import {createDayPlanner, updateDayPlanner} from '../../actions';
import {createSelectedYear, updateSelectedYear} from '../../actions';
import {createSelectedMonth, updateSelectedMonth} from '../../actions';
import {createSelectedDay, updateSelectedDay} from '../../actions';
import {createDestination, updateDestination} from '../../actions';

const MainPage = ({
	onMounted,
	onUpdate,
	dayPlanner,
	selectedYear,
	onMountYear,
	onUpdateYear,
	selectedMonth,
	onMountMonth,
	onUpdateMonth,
	selectedDate,
	onMountDay,
	onUpdateDay,
	onMountDestination,
	onUpdateDestination,
	destination,
}) => {
	/*****************************************  Constants *****************************************/
	const cu = new CalenderUtils();
	// get the 12 months from calendar utility class
	const months = new CalenderUtils().getMonths();

	// get the total days for each month respectively
	const monthData = cu.getDayArrayForMonthOfYear(selectedYear);

	/*****************************************  Event handlers *****************************************/
	const handleNavToMonth = (month) => {
		// setSelectedMonth(parseInt(month));
		// setSelectedDate(1);
		onUpdateMonth(parseInt(month));
		onUpdateDay(1);
		// setDestination(1);
		onUpdateDestination(1);
	};

	const handleNavToDay = (day, month) => {
		if (day > 0) {
			onUpdateMonth(month);
			onUpdateDay(day);
			onUpdateDestination(1);
		}
	};

	const handleChangeMonth = (value) => {
		// setSelectedMonth(selectedMonth + value);
		onUpdateMonth(selectedMonth + value);
		onUpdateDay(1);
	};

	const handleChangeDate = (date) => {
		onUpdateDay(date);
		// setSelectedDate(date);
	};

	const handleDeleteEvent = (index) => {
		const newState = [...dayPlanner];
		newState[0][selectedMonth - 1].data[selectedDate - 1][0].events.splice(
			index,
			1
		);
		onUpdate(newState);
	};

	const handleAddEvent = (e) => {
		const val = e.target.previousSibling.value;
		e.target.previousSibling.value = '';
		const newState = [...dayPlanner];
		newState[0][selectedMonth - 1].data[selectedDate - 1][0].events.push(
			val
		);
		onUpdate(newState);
	};

	const handleAddTask = (e, index) => {
		const val = e.target.previousSibling.value;
		e.target.previousSibling.value = '';
		if (val.length > 0 && val !== null && val.trim() !== '') {
			const newState = [...dayPlanner];
			newState[0][selectedMonth - 1].data[selectedDate - 1][1][
				index
			].tasks.push(val.trim());
			onUpdate(newState);
			// handleToggleAddItemWidget(index, false);
		}
	};

	const handleDeleteTask = (periodIndex, itemIndex) => {
		const newState = [...dayPlanner];
		newState[0][selectedMonth - 1].data[selectedDate - 1][1][
			periodIndex
		].tasks.splice(itemIndex, 1);
		onUpdate(newState);
	};

	const handleReturnHome = () => {
		onUpdateDestination(0);
	};

	useEffect(() => {
		onMountDestination(0);
		onMountYear(new Date().getFullYear());
		onMountMonth(new Date().getMonth() + 1);
		onMountDay(new Date().getDate());
		const data = new CalenderUtils().getInitialPlannerForYear();
		onMounted([data]);
	}, []);

	useEffect(() => {
		const plannerData = localStorage.getItem('day-planner');
		if (plannerData) {
			onUpdate(JSON.parse(plannerData));
		}
	}, []);

	useEffect(() => {
		const data = [...dayPlanner];
		localStorage.setItem('day-planner', JSON.stringify(data));
	});

	switch (destination) {
		case 0:
			return (
				<Overview
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					navToMonthFromOverview={handleNavToMonth}
					navToDayFromOverview={handleNavToDay}
				/>
			);
		case 1:
			return (
				<Planner
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					selectedMonth={selectedMonth}
					selectedDate={selectedDate}
					changeMonth={handleChangeMonth}
					changeDate={handleChangeDate}
					dayPlanner={dayPlanner}
					addEvent={handleAddEvent}
					deleteEvent={handleDeleteEvent}
					addTask={handleAddTask}
					deleteTask={handleDeleteTask}
					returnHome={handleReturnHome}
				/>
			);
		default:
			return (
				<Overview
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					navToMonthFromOverview={handleNavToMonth}
					navToDayFromOverview={handleNavToDay}
				/>
			);
	}
};

const mapStateToProps = (state) => ({
	dayPlanner: state.dayPlanner,
	selectedYear: state.selectedYear,
	selectedMonth: state.selectedMonth,
	selectedDate: state.selectedDate,
	destination: state.destination,
});

const mapDispatchToProps = (dispatch) => ({
	onMounted: (dayPlanner) => dispatch(createDayPlanner(dayPlanner)),
	onUpdate: (dayPlanner) => dispatch(updateDayPlanner(dayPlanner)),

	onMountYear: (year) => dispatch(createSelectedYear(year)),
	onUpdateYear: (year) => dispatch(updateSelectedYear(year)),

	onMountMonth: (month) => dispatch(createSelectedMonth(month)),
	onUpdateMonth: (month) => dispatch(updateSelectedMonth(month)),

	onMountDay: (day) => dispatch(createSelectedDay(day)),
	onUpdateDay: (day) => dispatch(updateSelectedDay(day)),

	onMountDestination: (d) => dispatch(createDestination(d)),
	onUpdateDestination: (d) => dispatch(updateDestination(d)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
