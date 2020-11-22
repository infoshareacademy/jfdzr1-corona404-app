import React from "react";
import "./dashboard.css";
import { Title } from "./title";
import { Subtitle } from "./subtitle";
import shop from "./images/money.svg";
import Comments from "./comments";
import Charts from "./charts";
import gsap from "gsap";

class Dashboard extends React.Component {
  state = {
    comments: [],
    commentsToDisplay: [],
  };

  async componentDidMount() {
    gsap.from(".shop_img", { opacity: 0, duration: 1, delay: 0.2 });

    await fetch("https://corona404-2499f.firebaseio.com/comments.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        this.setState({ comments: formattedData });
      });

    const commentsToDisplay = this.state.comments.slice(
      Math.max(this.state.comments.length - 3, 0)
    );
    this.setState({
      commentsToDisplay: commentsToDisplay,
    });
    console.log(commentsToDisplay);
  }

  render() {
    return (
      <section className="main_container">
        <Title></Title>
        <img src={shop} className="shop_img" alt="shopping app"></img>
        <Charts comments={this.state.comments}></Charts>
        <Subtitle></Subtitle>
        <Comments commentsToDisplay={this.state.commentsToDisplay}></Comments>
      </section>
    );
  }
}

export default Dashboard;
