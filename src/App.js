import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Overview from './components/Overview/Overview';
import Planner from './components/Planner/Planner';
import CalenderUtils from '../src/utils/CalenderUtils';

const App = () => {
	const [selectedMonth, setSelectedMonth] = useState('');

	const year = new Date().getFullYear();
	const cu = new CalenderUtils();
	const months = cu.getMonths();
	const monthData = cu.getDayArrayForMonthOfYear(year);

	function navToMonthViaMonth(history, month) {
		setSelectedMonth(month);
		history.push('/planner');
	}

	return (
		<BrowserRouter>
			<div className="app">
				<Route
					exact
					path="/"
					render={() => {
						return (
							<Overview
								year={year}
								months={months}
								monthData={monthData}
								navToMonthViaMonth={navToMonthViaMonth}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/planner"
					render={() => <Planner selectedMonth={selectedMonth} />}
				/>
			</div>
		</BrowserRouter>
	);
};

export default App;
