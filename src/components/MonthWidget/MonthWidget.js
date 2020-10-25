import React from 'react';
import './MonthWidget.css';
import DayTinyGrid from '../DayTinyGrid/DayTinyGrid';
import DayOfWeekPlaceholder from '../DayOfWeekPlaceHolder/DayOfWeekPlaceholder';

const Month = (props) => {
	const date = new Date();
	const todayKey =
		(date.getMonth() + 1).toString().padStart(2, '0') +
		date.getDate().toString().padStart(2, '0');
	return (
		<div className="month-container">
			<div className="month-header">{props.month}</div>
			<DayOfWeekPlaceholder />
			<div className="month-body">
				{props.monthData.map((day, index) => {
					return (
						<DayTinyGrid
							key={index}
							dayOfMonth={day.toString()}
							isToday={
								props.month + day.toString() === todayKey ? true : false
							}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Month;
