import React from 'react';
import './AddEventWidget.css';

const AddEventWidget = (props) => {
	return (
		<div className="eventWidgetContainer">
			<div className="eventWidget">
				<span className="eventWidgetTitle">{`${props.month}/${props.date} Event:`}</span>
				<input
					type="text"
					maxLength="30"
					ref={(input) => input && input.focus()}
				/>
				<span
					className="eventAddButton"
					onClick={(e) => props.addEvent(e)}>
					Add
				</span>
			</div>
		</div>
	);
};

export default AddEventWidget;
