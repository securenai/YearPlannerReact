import React from 'react';
import './DayGrid.css';

const DayGrid = (props) => {
	return (
		<div className="dayGrid">
			<span>{props.day}</span>
		</div>
	);
};

export default DayGrid;
