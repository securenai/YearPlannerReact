import React from 'react';
import DayGrid from './DayGrid';
import DayOfWeekRow from './DayOfWeekRow';
import './Month.css';

const Month = () => {
	const tmp = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
	];
	return (
		<div className="month-container">
			<div className="month-header">
				<div className="month-header-title">OCTOBER 1</div>
				<DayOfWeekRow />
			</div>
			<div className="month-body">
				{tmp.map((day) => {
					return <DayGrid day={day} key={day.toString()} />;
				})}
			</div>
		</div>
	);
};

export default Month;
