import React from 'react';
import './DayGrid.css';

const DayGrid = (props) => {
	let classForDayGrid = 'dayGrid';

	if (props.day !== 0) {
		if (props.date === props.day) {
			classForDayGrid += ' selectedDayGrid';
		}
		props.dayPlanner[props.day - 1].forEach((item) => {
			if (item.tasks.length > 0) {
				classForDayGrid += ' dayGridHasTask';
			}
		});
	}

	const setGridColor = () => {};

	return (
		<div
			className={classForDayGrid}
			onClick={(e) => {
				props.handleChangeDate(e);
			}}>
			<span>{props.day === 0 ? '' : props.day}</span>
		</div>
	);
};

export default DayGrid;
