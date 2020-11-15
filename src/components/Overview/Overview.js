import React from 'react';
import MonthWidget from './MonthWidget/MonthWidget';
import './overview.css';
import help_icon from '../../images/help.png';

const Overview = (props) => {
	return (
		<div className="overview-container">
			<div className="overview-header">
				<div className="overview-year-title">{`Year ${props.selectedYear}`}</div>
				<div className="help-btn">
					<img
						className="help-icon"
						src={help_icon}
						onClick={props.toggleHelp}
					/>
				</div>
			</div>
			{/* <div>
				<select
					className="overview-select-year"
					onChange={(e) => props.changeYear(e)}>
					<option>{new Date().getFullYear()}</option>
					<option>{new Date().getFullYear() + 1}</option>
				</select>
			</div> */}
			<div className="overview-body">
				{props.months.map((month, index) => {
					return (
						<MonthWidget
							dayPlanner={props.dayPlanner}
							selectedYear={props.selectedYear}
							month={month}
							key={month}
							monthData={props.monthData[index]}
							navToMonthFromOverview={props.navToMonthFromOverview}
							navToDayFromOverview={props.navToDayFromOverview}
						/>
					);
				})}
			</div>
			<div
				className="reset-all-btn"
				onClick={() => {
					if (window.confirm('Clear All Data?')) {
						return props.resetAllData();
					}
				}}>
				clear all data
			</div>
		</div>
	);
};

export default Overview;
