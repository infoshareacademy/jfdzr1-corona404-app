/* eslint-disable no-unused-expressions */
import React from "react";
import "./dashboard.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RateUs from "./Rating/Rating";

class Comments extends React.Component {
  render() {
    return (
      <div className="comments__container">
        <div className="comments">
          {this.props.commentsToDisplay.map((comment) => {
            return (
              <div className="comment">
                <Typography variant="h5">"{comment.comment}"</Typography>
                <Typography
                  variant="h6"
                  style={
                    comment.author === "author"
                      ? { visibility: "hidden" }
                      : { display: "block" }
                  }
                >
                  {comment.author}
                </Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={comment.rate} readOnly />
                </Box>
              </div>
            );
          })}
        </div>
        <RateUs />
      </div>
    );
  }
}

export default Comments;
