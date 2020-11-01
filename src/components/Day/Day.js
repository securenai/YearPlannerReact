import React from 'react';
import TaskWrapper from '../TaskWrapper/TaskWrapper';
import './Day.css';

const Day = (props) => {
	const d = new Date(props.year, props.month - 1, props.date, 0, 0, 0, 0);

	return (
		<div className="day-container">
			<div className="dayOfWeekTitle dayOfWeekTitleSticky ">
				{d.toString().substring(0, 15)}
			</div>
			<div className="dailyTaskContainer">
				{props.tasks.map((item, index) => {
					return (
						<div className="dailyTaskGrid" key={index}>
							<div className="period">{item.period}</div>
							<div className="task">
								<TaskWrapper
									item={item}
									index={index}
									tasks={props.tasks}
									addTask={props.addTask}
									deleteTask={props.deleteTask}
									addTaskToggleArray={props.addTaskToggleArray}
									toggleAddItemWidget={props.toggleAddItemWidget}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Day;
