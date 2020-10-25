import React from 'react';
import Month from '../Month/Month';
import './overview.css';

const Overview = () => {
	const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div className="overview-container">
			<div className="overview-header">Year 20XX</div>
			<div className="overview-body">
				{months.map((month) => {
					return <Month month={month} key={month} />;
				})}
			</div>
		</div>
	);
};

export default Overview;
