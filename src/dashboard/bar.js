import React from 'react';
import {Bar} from 'react-chartjs-2';
import './dashboard.css';

const data = {
  labels: ['January','February', 'March', 'April',"June"],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#90e0ef',
      borderColor: '#90e0ef',
      borderWidth: 1,
      hoverBackgroundColor: '#a8dadc',
      hoverBorderColor: '#a8dadc',
      data: [30, 40, 44, 56, 62]
    }
  ]
};

class BarChart extends React.Component{
  render() {
    return (
      <div className="bar">
        <Bar 
          data={data}
          width={50}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};

export default BarChart;