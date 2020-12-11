import React from "react";
import { Bar } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import "./dashboard.css";

class BarChart extends React.Component {
  render() {
    return (
      <div className="bar">
        <Bar
          data={this.props.barData}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false,
            legend: { display: false },
          }}
        />
        <Typography
          variant="h6"
          style={{ fontWeight: "300", textAlign: "center" }}
        >
          Liczba Produktów w sklepie
        </Typography>
      </div>
    );
  }
}

export default BarChart;
