import { CardActions, CardContent } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import "../products.css";
import ProductModal from "./ProdctModal";

class ProductCard extends React.Component {
  state = {
    setOpen: false,
  };

  handleOpen = () => {
    this.setState({
      setOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  render() {
    return (
      <div>
        <Card className="productContainer">
          <CardContent>
            <p className="title">{this.props.product.name}</p>
            <div className="img-container">
              <img
                src={this.props.product.image}
                className="img-wrapper"
                alt="product-img"
                onClick={this.handleOpen}
              />
            </div>
          </CardContent>
          <CardActions className="cardActions">
            <div size="small" className="cardActions-content">
              <AttachMoneyIcon style={{ fontSize: "1.75rem" }} />
              <div className="price-field">
                {" "}
                {this.props.product.price.value}
                <span style={{ fontSize: "1rem" }}>
                  {" "}
                  zł{"/"}
                  {this.props.product.price.unit}
                </span>
              </div>
            </div>
            <Button size="small">
              <ShoppingCartIcon
                style={{ fontSize: "1.75rem" }}
                onClick={() => this.props.handleAddToCart(this.props.product)}
              />
            </Button>
          </CardActions>
        </Card>
        <ProductModal
          product={this.props.product}
          open={this.state.setOpen}
          close={this.handleClose}
        />
      </div>
    );
  }
}

export default ProductCard;
