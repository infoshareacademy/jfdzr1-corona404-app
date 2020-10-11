import React from 'react';
import { Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography'
import './dashboard.css';

const data = {
  labels: ['January', 'February', 'March', 'April', "June", "July"],
  datasets: [
    {
      label: 'Liczba wystawców w sklepie',
      backgroundColor: '#76b5da',
      borderColor: '#76b5da',
      borderWidth: 1,
      hoverBackgroundColor: '#a8dadc',
      hoverBorderColor: '#a8dadc',
      data: [9, 25, 44, 66, 82, 99],
    },

  ]
};

class BarChart extends React.Component {
  render() {
    return (
      <div className="bar">
        <Bar
          data={data}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false,
            legend:{display:false}
          }}
        />
        <Typography variant="h6" style={{fontWeight: '300', textAlign:"center"}}>Liczba Wystawców w sklepie</Typography>
      </div>
    );
  }
};

export default BarChart;