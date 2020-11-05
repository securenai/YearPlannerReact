import React, {useState, useEffect} from 'react';
import Day from './Day/Day';
import Month from './Month/Month';
import CalenderUtils from '../../utils/CalenderUtils';

import './Planner.css';

const Planner = (props) => {
	const [addTaskToggleArray, setAddTaskToggleArray] = useState([]);
	const [eventWidgetShow, setEventWidgetShow] = useState(false);

	const cu = new CalenderUtils();
	const [dayPlanner, setDayPlanner] = useState([
		cu.getInitialPlannerForYear(),
	]);

	const tasks =
		dayPlanner[0][props.selectedMonth - 1].data[props.selectedDate - 1];

	useEffect(() => {
		resetAddTaskToggleArray();
	}, []);

	const resetAddTaskToggleArray = () => {
		const arr = [];
		for (let i = 0; i < 24; i++) {
			arr.push(false);
		}
		setAddTaskToggleArray(arr);
	};

	const handleChangeDate = (e) => {
		if (e.target.querySelector('span') !== null) {
			const toggledDate = parseInt(
				e.target.querySelector('span').innerText
			);
			if (isNaN(toggledDate) === false) {
				props.changeDate(toggledDate);
			}
			resetAddTaskToggleArray();
			setEventWidgetShow(false);
			return;
		}
		if (
			e.target.className === 'eventItem' ||
			e.target.className === 'eventItemMore'
		) {
			const toggledDate = parseInt(
				e.target.parentElement.parentElement.querySelector('span')
					.innerText
			);
			if (isNaN(toggledDate) === false) {
				props.changeDate(toggledDate);
			}
			resetAddTaskToggleArray();
			setEventWidgetShow(false);
			return;
		}
	};

	const handleChangeMonth = (value) => {
		props.changeMonth(value);
		resetAddTaskToggleArray();
		setEventWidgetShow(false);
	};

	const handleAddTask = (e, index) => {
		const val = e.target.previousSibling.value;
		e.target.previousSibling.value = '';
		if (val.length > 0 && val !== null && val.trim() !== '') {
			const newState = [...dayPlanner];
			newState[0][props.selectedMonth - 1].data[props.selectedDate - 1][1][
				index
			].tasks.push(val.trim());
			setDayPlanner(newState);
			handleToggleAddItemWidget(index, false);
		}
	};

	const deleteTask = (periodIndex, itemIndex) => {
		const newState = [...dayPlanner];
		newState[0][props.selectedMonth - 1].data[props.selectedDate - 1][1][
			periodIndex
		].tasks.splice(itemIndex, 1);
		setDayPlanner(newState);
	};

	const deleteEvent = (index) => {
		const newState = [...dayPlanner];
		newState[0][props.selectedMonth - 1].data[
			props.selectedDate - 1
		][0].events.splice(index, 1);
		setDayPlanner(newState);
	};

	const handleToggleAddItemWidget = (index, open) => {
		const newState = [];
		for (let i = 0; i < 24; i++) {
			newState.push(false);
		}
		if (open === true) {
			newState[index] = true;
		} else if (open === false) {
			newState[index] = false;
		}
		setAddTaskToggleArray(newState);
	};

	const handleOpenAddEventWidget = () => {
		setEventWidgetShow(true);
	};

	const handleAddEvent = (e) => {
		const val = e.target.previousSibling.value;
		e.target.previousSibling.value = '';
		const newState = [...dayPlanner];
		newState[0][props.selectedMonth - 1].data[
			props.selectedDate - 1
		][0].events.push(val);
		setDayPlanner(newState);
	};

	return (
		<div className="planner-container">
			<div className="planner-left">
				<Month
					month={props.selectedMonth}
					date={props.selectedDate}
					monthData={props.monthData}
					changeDate={handleChangeDate}
					changeMonth={handleChangeMonth}
					dayPlanner={dayPlanner[0][props.selectedMonth - 1].data}
					eventWidgetShow={eventWidgetShow}
					openAddEventWidget={handleOpenAddEventWidget}
					addEvent={handleAddEvent}
				/>
			</div>
			<div className="planner-right">
				<Day
					selectedYear={props.selectedYear}
					month={props.selectedMonth}
					date={props.selectedDate}
					tasks={tasks[1]}
					events={tasks[0]}
					addTask={handleAddTask}
					deleteTask={deleteTask}
					deleteEvent={deleteEvent}
					addTaskToggleArray={addTaskToggleArray}
					toggleAddItemWidget={handleToggleAddItemWidget}
				/>
			</div>
		</div>
	);
};

export default Planner;
