import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Overview from './components/Overview/Overview';
import Planner from './components/Planner/Planner';
import CalenderUtils from '../src/utils/CalenderUtils';

const App = () => {
	const d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let date = d.getDate();
	const cu = new CalenderUtils();
	const months = cu.getMonths();
	const monthData = cu.getDayArrayForMonthOfYear(year);

	console.log('app');

	function navToMonth(history, m) {
		month = parseInt(m);
		console.log(month);
		date = 1;
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
								navToMonth={navToMonth}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/planner"
					render={() => (
						<Planner
							year={year}
							month={month}
							monthData={monthData}
							date={date}
						/>
					)}
				/>
			</div>
		</BrowserRouter>
	);
};

export default App;
