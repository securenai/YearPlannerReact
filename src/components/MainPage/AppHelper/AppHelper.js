import React from 'react';
import './AppHelper.css';
import help1 from '../../../images/help1.png';
import help2 from '../../../images/help2.png';
import help3 from '../../../images/help3.png';

const AppHelper = (props) => {
	return (
		<div>
			<div className="helper" onClick={props.toggleHelp}>
				<div className="help-info">
					<span className="help-item">
						<img className="helper-image" src={help1} />
					</span>
					<span className="help-item">
						<img className="helper-image" src={help2} />
					</span>
					<span className="help-item">
						<img className="helper-image" src={help3} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default AppHelper;
