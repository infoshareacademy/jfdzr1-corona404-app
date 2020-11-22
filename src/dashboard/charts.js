import React from "react";
import PieChart from "./pie";
import BarChart from "./bar";

class Charts extends React.Component {
  state = {
    rateThree: 0,
    rateFour: 0,
    rateFive: 0,
    pieData: {},
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        rateThree: this.props.comments.filter((comment) => comment.rate === 3)
          .length,
        rateFour: this.props.comments.filter((comment) => comment.rate === 4)
          .length,
        rateFive: this.props.comments.filter((comment) => comment.rate === 5)
          .length,
      });
      this.data();
    }

    console.log(this.state);
  }

  data = () => {
    this.setState({
      pieData: {
        labels: ["5 ⭐", "4 ⭐", "3 ⭐"],
        datasets: [
          {
            data: [
              this.state.rateFive,
              this.state.rateFour,
              this.state.rateThree,
            ],
            backgroundColor: ["#457b9d", "#a8dadc", "#83c5be"],
            hoverBackgroundColor: ["#457b9d", "#a8dadc", "#83c5be"],
          },
        ],
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  };

  render() {
    return (
      <div className="graph_container">
        <PieChart pieData={this.state.pieData} />
        <BarChart />
      </div>
    );
  }
}

export default Charts;
