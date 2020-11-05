import React, {useState} from 'react';
import NewTaskWidget from './NewTaskWidget/NewTaskWidget';
import TaskItem from './TaskItem/TaskItem';
import './TaskWrapper.css';

const TaskWrapper = (props) => {
	const [toggleBtn, setToggleBtn] = useState(false);

	const showAddTaskIcon = () => {
		setToggleBtn(true);
	};
	const hideAddTaskIcon = () => {
		setToggleBtn(false);
	};
	const handleOpenAddTaskWidget = () => {
		props.toggleAddItemWidget(props.index, true);
	};
	const handleCloseTaskWidget = (e) => {
		e.target.previousSibling.previousSibling.value = '';
		props.toggleAddItemWidget(props.index, false);
	};
	return (
		<div className="task-wrapper">
			{props.item.tasks.map((task, index) => {
				return (
					<TaskItem
						task={task}
						index={index}
						key={index.toString()}
						deleteTask={props.deleteTask}
						periodIndex={props.index}
					/>
				);
			})}
			<span
				className="addTaskButton"
				onMouseEnter={showAddTaskIcon}
				onMouseLeave={hideAddTaskIcon}
				onClick={handleOpenAddTaskWidget}>
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
			<div
				className={
					props.addTaskToggleArray[props.index] === true
						? 'addTaskWidgetToggleBtn-show'
						: 'addTaskWidgetToggleBtn-hide'
				}>
				<NewTaskWidget
					addTask={props.addTask}
					index={props.index}
					closeTaskWidget={handleCloseTaskWidget}
				/>
			</div>
		</div>
	);
};

export default TaskWrapper;
