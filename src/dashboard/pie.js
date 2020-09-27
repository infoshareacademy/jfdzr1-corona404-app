import React from 'react';
import {Pie} from 'react-chartjs-2';
import './dashboard.css';

const data = {
	labels: [
		'Dark Blue',
		'Light Blue',
		'Blue'
	],
	datasets: [{
		data: [200, 50, 100],
		backgroundColor: [
		'#457b9d',
		'#a8dadc',
		'#83c5be'
		],
		hoverBackgroundColor: [
		'#457b9d',
		'#a8dadc',
		'#83c5be'
		]
	}]
};

class PieChart extends React.Component{
  
  render() {
    return (
      <div className="pie">
        <Pie data={data}
        width={50}
        height={50}
        options={{
          maintainAspectRatio: false
        }} />
      </div>
    );
  }
};

export default PieChart;