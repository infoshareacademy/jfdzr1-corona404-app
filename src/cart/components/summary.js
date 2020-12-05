import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Discount from "./discount";
import DiscountPopup from "./discountPopup";
import ErrorPopup from "./errorPopup";

const StyledButton = withStyles({
  root: {
    width: "130px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    fontSize: "18px",
    color: "white",
    height: 40,
    padding: "0 20px",
    transform: "translateY(-10px)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

class Summary extends React.Component {
  state = {
    discountCode: "",
    succesPopup: false,
    errorPopup: false,
    discountAccepted: false,
  };

  handleOnSubmit = (event, passedDiscountCode) => {
    event.preventDefault();
    this.setState({
      discountCode: passedDiscountCode,
    });

    if (passedDiscountCode === "CORONA") {
      this.setState({
        succesPopup: true,
        errorPopup: false,
        discountAccepted: true,
      });
    } else {
      this.setState({
        succesPopup: false,
        errorPopup: true,
      });
    }

    setTimeout(() => {
      this.setState({
        errorPopup: false,
        succesPopup: false,
      });
    }, 1500);
  };

  render() {
    return (
      <>
        <Typography variant="h5">Podsumowanie</Typography>
        <div className="summary_values">
          <div style={{ marginBottom: "30px" }}>
            <Typography variant="h7">
              Łączna kwota <br /> (w tym VAT) :
              <span style={{ fontWeight: "800", float: "right" }}>
                {this.props.totalPrice} zł
              </span>
            </Typography>
          </div>
          <div>
            <Typography variant="h7">
              Wysyłka :
              <span style={{ fontWeight: "800", float: "right" }}>
                {this.state.discountCode === "CORONA"
                  ? "GRATIS"
                  : this.props.sendPrice + " zł"}
              </span>
            </Typography>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <StyledButton className="order_button">Zamów</StyledButton>
          </div>
        </div>
        <Discount
          sendPrice={this.state.sendPrice}
          handleOnSubmit={this.handleOnSubmit}
          discountAccepted={this.state.discountAccepted}
        />
        <div>
          {this.state.succesPopup === true && (
            <DiscountPopup open={this.state.succesPopup}></DiscountPopup>
          )}
          {this.state.errorPopup === true && (
            <ErrorPopup open={this.state.errorPopup}></ErrorPopup>
          )}
        </div>
      </>
    );
  }
}

export default Summary;
