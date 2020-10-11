import { CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import styles from '../products.css';

class ProductCard extends React.Component {
  state = {
    likesCount: 0
  }


  render() {
    return <div className={styles.productsContainer}>
      <Card style={{width: '300px'}}>
      <CardContent>
        <p className={styles.title}>
          {this.props.product.name}
        </p>
        <div>
          <img src={this.props.product.image} className={styles.img_wrapper}/>
        </div>
      </CardContent>
      <CardActions>

        <div size='small'>
          <AttachMoneyIcon style={{ fontSize: '1.75rem'}}/> {this.props.product.price.value}{' '}zł{'/'}{this.props.product.price.unit}
        </div>
        <Button size="small">
          <ShoppingCartIcon style={{ fontSize: '1.75rem'}}/>
        </Button>
      </CardActions>
    </Card>
    </div>
  }
}

export default ProductCard;