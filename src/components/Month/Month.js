import React from 'react';
import DayGrid from './DayGrid';
import DayOfWeekRow from './DayOfWeekRow';
import './Month.css';
import CalenderUtils from '../../utils/CalenderUtils';

const Month = (props) => {
	const month = props.monthData[props.month - 1];
	const cu = new CalenderUtils();
	const monthName = cu.getMonthNameAt(props.month);

	return (
		<div className="month-container">
			<div className="month-header">
				<div
					className="month-header-1"
					onClick={() => {
						props.handleChangeMonth(-1);
					}}></div>
				<div className="month-header-2">
					<div className="month-header-title">
						<div className="month-header-title-month-number">
							{props.month}
						</div>
						<div className="month-header-title-month-name">
							{monthName}
						</div>
					</div>
				</div>
				<div
					className="month-header-3"
					onClick={() => {
						props.handleChangeMonth(1);
					}}></div>
			</div>
			<DayOfWeekRow />
			<div className="month-body">
				{month.map((day, index) => {
					return (
						<DayGrid
							date={props.date}
							day={day}
							key={index.toString()}
							handleToggleDate={props.handleToggleDate}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Month;
