import React, {useState} from 'react';
import CalenderUtils from '../../utils/CalenderUtils';
import Overview from '../Overview/Overview';
import Planner from '../Planner/Planner';

const MainPage = () => {
	/*****************************************  States *****************************************/
	const [destination, setDestination] = useState(0); // controls the conditional rendering

	// controls the selected year, default is the current year
	const [selectedYear, setSelectedYear] = useState(
		new Date().getFullYear()
	);

	// controls the selected month, default is the current month
	const [selectedMonth, setSelectedMonth] = useState(
		new Date().getMonth() + 1
	);
	const [selectedDate, setSelectedDate] = useState(new Date().getDate()); // controls the selected date, default is the current date

	/*****************************************  Constants *****************************************/
	const cu = new CalenderUtils();
	// get the 12 months from calendar utility class
	const months = cu.getMonths();

	// get the total days for each month respectively
	const monthData = cu.getDayArrayForMonthOfYear(selectedYear);

	/*****************************************  Event handlers *****************************************/
	const handleNavToMonth = (month) => {
		setSelectedMonth(parseInt(month));
		setSelectedDate(1);
		setDestination(1);
	};

	const handleChangeMonth = (value) => {
		setSelectedMonth(selectedMonth + value);
	};

	const handleChangeDate = (date) => {
		setSelectedDate(date);
	};

	switch (destination) {
		case 0:
			return (
				<Overview
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					navToMonthFromOverview={handleNavToMonth}
				/>
			);
		case 1:
			return (
				<Planner
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					selectedMonth={selectedMonth}
					selectedDate={selectedDate}
					changeMonth={handleChangeMonth}
					changeDate={handleChangeDate}
				/>
			);
		default:
			return (
				<Overview
					selectedYear={selectedYear}
					months={months}
					monthData={monthData}
					navToMonthFromOverview={handleNavToMonth}
				/>
			);
	}
};

export default MainPage;
