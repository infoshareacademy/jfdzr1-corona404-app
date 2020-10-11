import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import './dashboard.css';

const data = {
	labels: [
		'5 ⭐',
		'4 ⭐',
		'3 ⭐'
	],
	datasets: [{
		data: [80, 40, 20],
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
	}],
	options: {
		legend: {
			position: 'bottom',
		}
	}
};

class PieChart extends React.Component{
  render() {
    return (
      <div className="pie">
		  <Typography variant="h6" style={{fontWeight: '300'}}>Oceny Klientów</Typography>
        <Doughnut data={data}
        width={50}
        height={50}
        options={{
            maintainAspectRatio: false
          }}/>
      </div>
    );
  }
};

export default PieChart;