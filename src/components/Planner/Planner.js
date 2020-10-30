import React, {useState, useEffect} from 'react';
import Day from '../Day/Day';
import Month from '../Month/Month';

import './Planner.css';

const Planner = (props) => {
	const [selectedDate, setSelectedDate] = useState(props.date);
	const [selectedMonth, setSelectedMonth] = useState(props.month);
	const [selectedYear, setSelectedYear] = useState(props.year);

	const [dayPlanner, setDayPlanner] = useState([
		{
			period: '12am',
			tasks: ['汽車加油', '繳電費', '買午餐', '讀書', '體育課'],
		},
		{
			period: '1am',
			tasks: [
				'汽車加油',
				'繳電費',
				'買午餐',
				'讀書',
				'體育課',
				'汽車加油',
				'繳電費',
				'買午餐',
				'讀書',
				'體育課',
				'汽車加油',
				'繳電費',
				'買午餐',
				'讀書',
				'體育課',
			],
		},
		{period: '2am', tasks: []},
		{period: '3am', tasks: []},
		{period: '4am', tasks: []},
		{period: '5am', tasks: []},
		{period: '6am', tasks: []},
		{period: '7am', tasks: []},
		{period: '8am', tasks: []},
		{period: '9am', tasks: []},
		{period: '10am', tasks: []},
		{period: '11am', tasks: []},
		{period: '12pm', tasks: []},
		{period: '1pm', tasks: []},
		{period: '2pm', tasks: []},
		{period: '3pm', tasks: []},
		{period: '4pm', tasks: []},
		{period: '5pm', tasks: []},
		{period: '6pm', tasks: []},
		{period: '7pm', tasks: []},
		{period: '8pm', tasks: []},
		{period: '9pm', tasks: []},
		{period: '10pm', tasks: []},
		{period: '11pm', tasks: []},
	]);

	const handleToggleDate = (e) => {
		if (e.target.querySelector('span') !== null) {
			const toggledDate = parseInt(
				e.target.querySelector('span').innerText
			);
			if (isNaN(toggledDate) === false) {
				setSelectedDate(toggledDate);
			}
		}
	};

	const handleChangeMonth = (value) => {
		setSelectedMonth(selectedMonth + value);
		setSelectedDate(1);
		// console.log(selectedMonth);
	};

	return (
		<div className="planner-container">
			<div className="planner-left">
				<Month
					month={selectedMonth}
					date={selectedDate}
					monthData={props.monthData}
					handleToggleDate={handleToggleDate}
					handleChangeMonth={handleChangeMonth}
				/>
			</div>
			<div className="planner-right">
				<Day
					year={selectedYear}
					month={selectedMonth}
					monthData={props.monthData}
					date={selectedDate}
					tasks={dayPlanner}
				/>
			</div>
		</div>
	);
};

export default Planner;
