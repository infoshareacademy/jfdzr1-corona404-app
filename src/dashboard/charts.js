import React from 'react';
import PieChart from './pie'
import BarChart from './bar';

class Charts extends React.Component {
	render() {
		return (
			<div className="graph_container">
				<PieChart/>
				<BarChart/>
			</div>
		)
	}
}

export default Charts;