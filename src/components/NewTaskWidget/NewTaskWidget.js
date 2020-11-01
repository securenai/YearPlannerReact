import React from 'react';
import './NewTaskWidget.css';

const NewTaskWidget = (props) => {
	return (
		<div>
			<span className="newTaskWrapper">
				<span className="newTaskTitle">new task:</span>
				<input
					ref={(input) => input && input.focus()}
					className="newTaskInput"
					type="text"
				/>
				<span
					className="newTaskAddButton"
					onClick={(e) => {
						return props.addTask(e, props.index);
					}}>
					Add
				</span>
				<span
					className="newTaskCancelButton"
					onClick={(e) => props.closeTaskWidget(e)}>
					Close
				</span>
			</span>
		</div>
	);
};

export default NewTaskWidget;
