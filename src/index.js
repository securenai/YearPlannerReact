import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>
			<h1>hello world!!</h1>
			<p>this is some text</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
