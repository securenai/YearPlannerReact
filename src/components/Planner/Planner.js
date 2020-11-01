import React, {useState, useEffect} from 'react';
import Day from '../Day/Day';
import Month from '../Month/Month';
import CalenderUtils from '../../utils/CalenderUtils';

import './Planner.css';

const Planner = (props) => {
	const [selectedDate, setSelectedDate] = useState(props.date);
	const [selectedMonth, setSelectedMonth] = useState(props.month);
	const [selectedYear, setSelectedYear] = useState(props.year);
	const [addTaskToggleArray, setAddTaskToggleArray] = useState([]);

	const cu = new CalenderUtils();
	const [dayPlanner, setDayPlanner] = useState([
		cu.getInitialPlannerForYear(),
	]);
	const tasks = dayPlanner[0][selectedMonth - 1].data[selectedDate - 1];

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
				setSelectedDate(toggledDate);
			}
		}
		resetAddTaskToggleArray();
	};

	const handleChangeMonth = (value) => {
		setSelectedMonth(selectedMonth + value);
		setSelectedDate(1);
		resetAddTaskToggleArray();
	};

	const handleAddTask = (e, index) => {
		const val = e.target.previousSibling.value;
		e.target.previousSibling.value = '';
		if (val.length > 0 && val !== null && val.trim() !== '') {
			const newState = [...dayPlanner];
			newState[0][selectedMonth - 1].data[selectedDate - 1][
				index
			].tasks.push(val.trim());
			setDayPlanner(newState);
			handleToggleAddItemWidget(index, false);
		}
	};

	const deleteTask = (periodIndex, itemIndex) => {
		const newState = [...dayPlanner];
		newState[0][selectedMonth - 1].data[selectedDate - 1][
			periodIndex
		].tasks.splice(itemIndex, 1);
		//newState[periodIndex].tasks.splice(itemIndex, 1);
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

	return (
		<div className="planner-container">
			<div className="planner-left">
				<Month
					month={selectedMonth}
					date={selectedDate}
					monthData={props.monthData}
					handleChangeDate={handleChangeDate}
					handleChangeMonth={handleChangeMonth}
					dayPlanner={dayPlanner[0][selectedMonth - 1].data}
				/>
			</div>
			<div className="planner-right">
				<Day
					year={selectedYear}
					month={selectedMonth}
					date={selectedDate}
					tasks={tasks}
					addTask={handleAddTask}
					deleteTask={deleteTask}
					addTaskToggleArray={addTaskToggleArray}
					toggleAddItemWidget={handleToggleAddItemWidget}
				/>
			</div>
		</div>
	);
};

export default Planner;
