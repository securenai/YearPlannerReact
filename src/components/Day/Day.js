import React from 'react';
import TaskWrapper from '../TaskWrapper/TaskWrapper';
import './Day.css';

const Day = (props) => {
	const d = new Date(props.year, props.month - 1, props.date, 0, 0, 0, 0);

	return (
		<div className="day-container">
			<div className="dayOfWeekTitle">{d.toString().substring(0, 15)}</div>
			<div className="dailyTaskContainer">
				{props.tasks.map((item, index) => {
					return (
						<div className="dailyTaskGrid" key={index}>
							<div className="period">{item.period}</div>
							<div className="task">
								{/* <div className="task-title">Tasks</div> */}
								<TaskWrapper item={item} />
							</div>
							{/* <div className="addTask">+</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Day;
