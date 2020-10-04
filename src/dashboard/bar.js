import React from 'react';
import {Bar} from 'react-chartjs-2';
import './dashboard.css';

const data = {
  labels: ['January','February', 'March', 'April',"June","July"],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#76b5da',
      borderColor: '#76b5da',
      borderWidth: 1,
      hoverBackgroundColor: '#a8dadc',
      hoverBorderColor: '#a8dadc',
      data: [9, 25, 44, 66, 82,99],
      options:{
        title:{
          display:true,
          text:"Śmieszne słupki"
        }
      }
    },
    
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