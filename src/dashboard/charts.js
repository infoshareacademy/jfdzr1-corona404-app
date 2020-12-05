import React from "react";
import PieChart from "./pie";
import BarChart from "./bar";

class Charts extends React.Component {
  state = {
    rateThree: null,
    rateFour: null,
    rateFive: null,
    productCount: null,
    pieData: {},
    barData: {},
  };

  componentDidMount() {
    fetch("https://corona404-2499f.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        this.barData(formattedData.length);
      });
  }

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
      this.pieData();
    }
  }

  barData = (prodCount) => {
    this.setState({
      barData: {
        labels: ["", "", "", "", "", ""],
        datasets: [
          {
            label: "Liczba produktów w sklepie",
            backgroundColor: "#76b5da",
            borderColor: "#76b5da",
            borderWidth: 1,
            hoverBackgroundColor: "#a8dadc",
            hoverBorderColor: "#a8dadc",
            data: [1, 4, 7, 9, 11, prodCount],
          },
        ],
      },
    });
  };

  pieData = () => {
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
        <BarChart barData={this.state.barData} />
      </div>
    );
  }
}

export default Charts;
