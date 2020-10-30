import React from 'react';
import './DayGrid.css';

const DayGrid = (props) => {
	return (
		<div
			className={
				props.date === props.day ? 'dayGrid selectedDayGrid' : 'dayGrid'
			}
			onClick={(e) => {
				props.handleToggleDate(e);
			}}>
			<span>{props.day === 0 ? '' : props.day}</span>
		</div>
	);
};

export default DayGrid;
