import React from 'react';
import MonthWidget from '../MonthWidget/MonthWidget';
import './overview.css';

const Overview = (props) => {
	return (
		<div className="overview-container">
			<div className="overview-header">{`Year ${props.year}`}</div>
			<div className="overview-body">
				{props.months.map((month, index) => {
					return (
						<MonthWidget
							year={props.year}
							month={month}
							key={month}
							monthData={props.monthData[index]}
							navToMonthViaMonth={props.navToMonthViaMonth}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Overview;
