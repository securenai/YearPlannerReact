import React from 'react';
import DayGrid from './DayGrid/DayGrid';
import DayOfWeekRow from './DayOfWeekRow/DayOfWeekRow';
import CalenderUtils from '../../../utils/CalenderUtils';
import AddEventWidget from './AddEventWidget/AddEventWidget';
import './Month.css';

const Month = (props) => {
	const month = props.monthData[props.month - 1];
	const cu = new CalenderUtils();
	const monthName = cu.getMonthNameAt(props.month);

	return (
		<div className="month-container">
			<div className="home-btn" onClick={props.returnHome}>
				Home
			</div>
			<div className="month-header">
				<div
					className={props.month === 1 ? '' : 'month-header-1'}
					onClick={() => {
						props.changeMonth(-1);
					}}></div>
				<div className="month-header-2">
					<div className="month-header-title">
						<div className="month-header-title-month-number">
							{`${props.month} 月`}
						</div>
						<div className="month-header-title-month-name">
							{monthName}
						</div>
					</div>
				</div>
				<div
					className={props.month === 12 ? '' : 'month-header-3'}
					onClick={() => {
						props.changeMonth(1);
					}}></div>
			</div>
			{(() => {
				if (props.eventWidgetShow === true) {
					return (
						<AddEventWidget
							month={props.month}
							date={props.date}
							addEvent={props.addEvent}
						/>
					);
				}
			})()}
			<DayOfWeekRow />
			<div className="month-body">
				{month.map((day, index) => {
					return (
						<DayGrid
							date={props.date}
							day={day}
							key={index.toString()}
							changeDate={props.changeDate}
							monthDayPlanner={props.monthDayPlanner}
							openAddEventWidget={props.openAddEventWidget}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Month;
