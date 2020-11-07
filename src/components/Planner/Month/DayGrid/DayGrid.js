import React, {useState} from 'react';
import './DayGrid.css';

const DayGrid = (props) => {
	const [toggleOnBtn, setToggleOnBtn] = useState(false);

	let classForDayGrid = 'dayGrid';
	if (props.day !== 0) {
		if (props.date === props.day) {
			classForDayGrid += ' selectedDayGrid';
		}
		props.monthDayPlanner[props.day - 1][1].forEach((item) => {
			if (item.tasks.length > 0) {
				classForDayGrid += ' dayGridHasTask';
			}
		});
	}
	let more = '';
	if (typeof props.monthDayPlanner[props.day - 1] === 'undefined') {
	} else {
		if (props.monthDayPlanner[props.day - 1][0].events.length > 1) {
			more = `& ${
				props.monthDayPlanner[props.day - 1][0].events.length - 1
			} more..`;
		}
	}

	const showAddEventIcon = () => {
		setToggleOnBtn(true);
	};
	const hideAddEventIcon = () => {
		setToggleOnBtn(false);
	};

	//console.log(props.dayPlanner[props.day - 1][0].events);

	return (
		<div
			className={classForDayGrid}
			onClick={(e) => {
				props.changeDate(e);
			}}>
			<span>{props.day === 0 ? '' : props.day}</span>
			<div
				className={props.day > 0 ? 'addEventBox' : ''}
				onMouseEnter={showAddEventIcon}
				onMouseLeave={hideAddEventIcon}>
				<svg
					className={
						props.date === props.day && toggleOnBtn === true
							? 'addEventBtn-show'
							: 'addEventBtn-hide'
					}
					onClick={props.openAddEventWidget}
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					viewBox="0 0 52 52">
					<path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
					<path d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
				</svg>
			</div>
			<div className="eventList">
				<div className="eventItem">
					{props.monthDayPlanner[props.day - 1] !== undefined &&
					props.monthDayPlanner[props.day - 1][0].events[0] !== undefined
						? `∙${props.monthDayPlanner[props.day - 1][0].events[0]}`
						: ''}
				</div>
				<div className="eventItemMore">{more}</div>
			</div>
		</div>
	);
};

export default DayGrid;
