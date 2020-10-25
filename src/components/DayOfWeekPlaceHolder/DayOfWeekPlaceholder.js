import React from 'react';
import './DayOfWeekPlaceholder.css';

const DayOfWeekPlaceholder = () => {
	return (
		<div className="dayOfWeekPlaceholder-wrapper">
			<span className="day-letter">S</span>
			<span className="day-letter">M</span>
			<span className="day-letter">T</span>
			<span className="day-letter">W</span>
			<span className="day-letter">T</span>
			<span className="day-letter">F</span>
			<span className="day-letter">S</span>
		</div>
	);
};

export default DayOfWeekPlaceholder;
