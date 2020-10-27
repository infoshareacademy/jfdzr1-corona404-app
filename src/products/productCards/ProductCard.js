import { CardActions, CardContent } from '@material-ui/core';
import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import '../products.css';

class ProductCard extends React.Component {

  render() {
    return (
      <div>
        <Card className="productContainer">
          <CardContent>
            <p className="title">
              {this.props.product.name}
            </p>
            <div className="img_container">
              <img src={this.props.product.image} className="img_wrapper" />
            </div>
          </CardContent>
          <CardActions className="cardActions">
            <div size='small'>
              <AttachMoneyIcon style={{ fontSize: '1.75rem' }} /> {this.props.product.price.value}{' '}zł{'/'}{this.props.product.price.unit}
            </div>
            <Button size="small" onClick={() => this.props.handleAddToCart(this.props.product)} >
              <ShoppingCartIcon style={{ fontSize: '1.75rem' }} />
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ProductCard;