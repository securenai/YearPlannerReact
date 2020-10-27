import React from 'react';
import Day from '../Day/Day';
import Month from '../Month/Month';

import './Planner.css';

const Planner = (props) => {
	console.log(props.selectedMonth);
	return (
		<div className="planner-container">
			<div className="planner-left">
				<Month />
			</div>
			<div className="planner-right">
				<Day />
			</div>
		</div>
	);
};

export default Planner;
