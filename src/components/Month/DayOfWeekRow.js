import React from 'react';
import './DayOfWeekRow.css';

const DayOfWeekRow = () => {
	return (
		<div className="dayOfWeekRow-wrapper">
			<span className="day-letter">SUN</span>
			<span className="day-letter">MON</span>
			<span className="day-letter">TUE</span>
			<span className="day-letter">WED</span>
			<span className="day-letter">THU</span>
			<span className="day-letter">FRI</span>
			<span className="day-letter">SAT</span>
		</div>
	);
};

export default DayOfWeekRow;
