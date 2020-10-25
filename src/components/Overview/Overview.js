import React from 'react';
import MonthWidget from '../MonthWidget/MonthWidget';
import getDayArrayForMonthOfYear from '../../utils/calenderUtils';
import './overview.css';

const Overview = (props) => {
	const monthData = getDayArrayForMonthOfYear(props.year);
	// console.log(monthData);
	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	];
	return (
		<div className="overview-container">
			<div className="overview-header">{`Year ${props.year}`}</div>
			<div className="overview-body">
				{months.map((month, index) => {
					return (
						<MonthWidget
							month={month}
							key={month}
							monthData={monthData[index]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Overview;
