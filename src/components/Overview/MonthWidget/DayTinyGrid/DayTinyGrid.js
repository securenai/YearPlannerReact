import React from 'react';
import './DayTinyGrid.css';

const DayTinyGrid = (props) => {
	return (
		<div
			className={
				props.isToday === true ? 'singleDayGrid isToday' : 'singleDayGrid'
			}>
			<span>{props.dayOfMonth === '0' ? '' : props.dayOfMonth}</span>
		</div>
	);
};

export default DayTinyGrid;
