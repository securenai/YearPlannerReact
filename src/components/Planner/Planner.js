import React, {useState, useEffect} from 'react';
import Day from './Day/Day';
import Month from './Month/Month';
import './Planner.css';

const Planner = (props) => {
	const [addTaskToggleArray, setAddTaskToggleArray] = useState([]);
	const [eventWidgetShow, setEventWidgetShow] = useState(false);

	const tasks =
		props.dayPlanner[0][props.selectedMonth - 1].data[
			props.selectedDate - 1
		];

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

	// const handleAddTask = (e, index) => {
	// 	props.addTask(e, index);
	// 	handleToggleAddItemWidget(index, false);
	// };

	return (
		<div className="planner-container">
			<div className="planner-left">
				<Month
					month={props.selectedMonth}
					date={props.selectedDate}
					monthData={props.monthData}
					changeDate={handleChangeDate}
					changeMonth={handleChangeMonth}
					monthDayPlanner={
						props.dayPlanner[0][props.selectedMonth - 1].data
					}
					eventWidgetShow={eventWidgetShow}
					openAddEventWidget={handleOpenAddEventWidget}
					addEvent={props.addEvent}
				/>
			</div>
			<div className="planner-right">
				<Day
					year={props.selectedYear}
					month={props.selectedMonth}
					date={props.selectedDate}
					tasks={tasks[1]}
					events={tasks[0]}
					// addTask={handleAddTask}
					addTask={props.addTask}
					deleteTask={props.deleteTask}
					deleteEvent={props.deleteEvent}
					addTaskToggleArray={addTaskToggleArray}
					toggleAddItemWidget={handleToggleAddItemWidget}
				/>
			</div>
		</div>
	);
};

export default Planner;
