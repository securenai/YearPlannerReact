import React from 'react';
import './MonthWidget.css';
import DayTinyGrid from './DayTinyGrid/DayTinyGrid';
import DayOfWeekPlaceholder from './DayOfWeekPlaceHolder/DayOfWeekPlaceholder';
import MonthWidgetHeader from './MonthWidgetHeader';

const Month = (props) => {
	const date = new Date();
	const todayKey =
		(date.getMonth() + 1).toString().padStart(2, '0') +
		date.getDate().toString().padStart(2, '0');
	return (
		<div className="monthWidget-container">
			<MonthWidgetHeader
				month={props.month}
				year={props.year}
				navToMonthFromOverview={props.navToMonthFromOverview}
			/>
			<DayOfWeekPlaceholder />
			<div className="monthWidget-body">
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
