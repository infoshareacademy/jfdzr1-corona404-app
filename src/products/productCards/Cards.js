import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../products';
import '../products.css';

class Cards extends React.Component {

    state = {
        products: products,
        productsInCart: []
    }

    componentDidMount() {
        if(localStorage.getItem("productsID") == true){
            this.setState({
                productsInCart: JSON.parse(localStorage["productsID"])
            })
        }
    }

    componentDidUpdate() {
        localStorage['productsID'] = JSON.stringify(this.state.productsInCart)
    }

      handleAddToCart = (passedProduct) => {
          if(this.state.productsInCart.find((product) => product === passedProduct.id)){
              console.log('Ten produkt już został dodany do koszyka')
          }else{
            this.setState({
                productsInCart: [...this.state.productsInCart, passedProduct.id]
              })
          }
      }

    render() {
        return <div className="sectionLayout">

            {
                this.state.products.map(product => (
                    <div style={{ marginBottom: '20px'}} key={product.id}>
                        <ProductCard product={product} handleAddToCart={this.handleAddToCart}/>
                    </div>
                ))
            }

        </div>
    }
}

export default Cards;