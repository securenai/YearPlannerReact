import React from 'react';
import './DayTinyGrid.css';

const DayTinyGrid = (props) => {
	return (
		<div
			className={
				props.isToday === true ? 'singleDayGrid isToday' : 'singleDayGrid'
			}
			onClick={() =>
				props.navToDayFromOverview(
					parseInt(props.dayOfMonth),
					parseInt(props.month)
				)
			}>
			<span>{props.dayOfMonth === '0' ? '' : props.dayOfMonth}</span>
		</div>
	);
};

export default DayTinyGrid;
