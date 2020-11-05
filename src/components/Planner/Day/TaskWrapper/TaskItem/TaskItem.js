import React, {useState} from 'react';
import './TaskItem.css';
import img from '../../../../../images/close_task_item.png';

const TaskItem = (props) => {
	const [toggleItemDeleteBtn, setToggleItemDeleteBtn] = useState(false);

	const showDelTaskIcon = () => {
		setToggleItemDeleteBtn(true);
	};
	const hideDelTaskIcon = () => {
		setToggleItemDeleteBtn(false);
	};
	return (
		<span className="taskItem" key={props.index}>
			{props.task}
			<span
				className="deleteItemButton-wrapper"
				onMouseEnter={showDelTaskIcon}
				onMouseLeave={hideDelTaskIcon}>
				<img
					className={
						toggleItemDeleteBtn === true
							? 'del-item-btn-show'
							: 'del-item-btn-hide'
					}
					src={img}
					onClick={() => props.deleteTask(props.periodIndex, props.index)}
				/>
			</span>
		</span>
	);
};

export default TaskItem;
