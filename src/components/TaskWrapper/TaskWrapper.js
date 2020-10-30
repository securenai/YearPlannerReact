import React, {useState} from 'react';
import './TaskWrapper.css';

const TaskWrapper = (props) => {
	const [toggleBtn, setToggleBtn] = useState(false);

	const showAddTaskIcon = () => {
		console.log('111');
		setToggleBtn(true);
	};
	const hideAddTaskIcon = () => {
		console.log('222');
		setToggleBtn(false);
	};

	return (
		<div className="task-wrapper">
			{props.item.tasks.map((task, index) => {
				return (
					<span className="taskItem" key={index}>
						{task}
					</span>
				);
			})}
			<span
				className="addTaskButton"
				onMouseEnter={showAddTaskIcon}
				onMouseLeave={hideAddTaskIcon}>
				<svg
					className={
						toggleBtn === true ? 'addTaskBtn-show' : 'addTaskBtn-hide'
					}
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					viewBox="0 0 52 52">
					<path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
					<path d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
				</svg>
			</span>
		</div>
	);
};

export default TaskWrapper;
