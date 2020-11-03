import React, {useState} from 'react';
import './EventItem.css';
import img from '../../images/close_task_item.png';

const EventItem = (props) => {
	const [toggleEventItemDeleteBtn, setToggleEventItemDeleteBtn] = useState(
		false
	);
	const showDelEventIcon = () => {
		setToggleEventItemDeleteBtn(true);
	};
	const hideDelEventIcon = () => {
		setToggleEventItemDeleteBtn(false);
	};

	return (
		<span className="singleEventItem" key={props.index.toString()}>
			{props.event}
			<span
				className="deleteEventItem-wrapper"
				onMouseEnter={showDelEventIcon}
				onMouseLeave={hideDelEventIcon}>
				<img
					className={
						toggleEventItemDeleteBtn === true
							? 'del-event-item-btn-show'
							: 'del-event-item-btn-hide'
					}
					src={img}
					onClick={() => props.deleteEvent(props.index)}
				/>
			</span>
		</span>
	);
};

export default EventItem;
