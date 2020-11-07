import { CardActions, CardContent} from '@material-ui/core';
import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import '../products.css';

class ProductCard extends React.Component {
  state = {
    productsToCart: []
  }

  handleBuyClick = (productToBuy) => {
    this.setState({
      productsToCart: [...this.state.productToBuy]
    })
  }

  componentDidMount() {
    this.shoppingList = JSON.parse(localStorage.getItem('shoppedItems'));
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('product', JSON.stringify(nextState));
  }

  render() {
    return (
      <div>
        <Card className="productContainer">
          <CardContent>
            <p className="title">
              {this.props.product.name}
            </p>
            <div className="img-container">
              <img src={this.props.product.image} className="img-wrapper"/>
            </div>
          </CardContent>
          <CardActions className="cardActions">
            <div size='small' className="cardActions-content">
              <AttachMoneyIcon style={{ fontSize: '1.75rem' }}/>
              <div className="price-field"> {this.props.product.price.value}{' '}zł{'/'}{this.props.product.price.unit}
              </div>
            </div>
            <Button size="small">
              <ShoppingCartIcon style={{ fontSize: '1.75rem' }} onClick={this.handleBuyClick}/>
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ProductCard;