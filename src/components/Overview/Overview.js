import React from 'react';
import MonthWidget from './MonthWidget/MonthWidget';
import './overview.css';

const Overview = (props) => {
	return (
		<div className="overview-container">
			<div className="overview-header">{`Year ${props.selectedYear}`}</div>
			<div className="overview-body">
				{props.months.map((month, index) => {
					return (
						<MonthWidget
							selectedYear={props.selectedYear}
							month={month}
							key={month}
							monthData={props.monthData[index]}
							navToMonthFromOverview={props.navToMonthFromOverview}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Overview;
