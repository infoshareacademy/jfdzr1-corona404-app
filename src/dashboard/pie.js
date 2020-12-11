import React from "react";
import { Doughnut } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import "./dashboard.css";

class PieChart extends React.Component {
  render() {
    return (
      <div className="pie">
        <Typography variant="h6" style={{ fontWeight: "300" }}>
          Oceny Klientów
        </Typography>
        <Doughnut
          data={this.props.pieData}
          width={50}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default PieChart;
