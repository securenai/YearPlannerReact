import React, {useState} from 'react';
import DayGrid from './DayGrid';
import DayOfWeekRow from './DayOfWeekRow';
import './Month.css';
import CalenderUtils from '../../utils/CalenderUtils';
import AddEventWidget from './AddEventWidget';

const Month = (props) => {
	const month = props.monthData[props.month - 1];
	const cu = new CalenderUtils();
	const monthName = cu.getMonthNameAt(props.month);

	return (
		<div className="month-container">
			<div className="month-header">
				<div
					className={props.month === 1 ? '' : 'month-header-1'}
					onClick={() => {
						props.handleChangeMonth(-1);
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
						props.handleChangeMonth(1);
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
							handleChangeDate={props.handleChangeDate}
							dayPlanner={props.dayPlanner}
							openAddEventWidget={props.openAddEventWidget}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Month;
