import React from 'react';
import './Month.css';
import calender from './images/calender_temp.png';

const Month = (props) => {
	return (
		<div className="month-container">
			<div className="month-header">{props.month}</div>
			<div className="month-body">
				<img className="calender_img" src={calender} />
			</div>
		</div>
	);
};

export default Month;
