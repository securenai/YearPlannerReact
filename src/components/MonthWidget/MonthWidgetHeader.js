import React from 'react';
import {useHistory} from 'react-router-dom';

const MonthWidgetHeader = (props) => {
	const history = useHistory();

	return (
		<div
			className="monthWidget-header"
			onClick={() => {
				props.navToMonthViaMonth(history, props.month);
			}}>
			{props.month}
		</div>
	);
};

export default MonthWidgetHeader;
