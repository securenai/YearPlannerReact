import React from 'react';
import './App.css';
import Overview from './components/Overview/Overview';

const App = () => {
	return (
		<div>
			<Overview year={new Date().getFullYear()} />
		</div>
	);
};

export default App;
