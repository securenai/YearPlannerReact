import React from 'react';

const MonthWidgetHeader = (props) => {
	return (
		<div
			className="monthWidget-header"
			onClick={() => props.navToMonthFromOverview(props.month)}>
			{props.month}
		</div>
	);
};

export default MonthWidgetHeader;
