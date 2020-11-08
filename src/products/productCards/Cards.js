import React from 'react';
import ProductCard from './ProductCard';
import AddedPopup from './AddedPopup';
import AlreadyAddedPopup from './AlreadyAddedPopup';
import { products } from '../products';
import '../products.css';

class Cards extends React.Component {

    state = {
        products: products,
        productsInCart: [],
        openAddedPopup: false,
        openAlreadyAddedPopup: false,
    }

    componentDidMount() {
        if(localStorage.getItem("productsID") !== null){

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
              this.setState({
                  openAlreadyAddedPopup: true,
              })

              setTimeout(() => {
                this.setState({
                    openAlreadyAddedPopup: false,
                })
               }, 2000);
          }else{
            this.setState({
                productsInCart: [...this.state.productsInCart, passedProduct.id],
                openAddedPopup: true,
              })

              setTimeout(() => {
                this.setState({
                    openAddedPopup: false,
                })
               }, 2000);
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
                 <div>
                    {this.state.openAddedPopup === true &&
                        <AddedPopup open={this.state.openAddedPopup}></AddedPopup>}
                </div>
                <div>
                    {this.state.openAlreadyAddedPopup === true &&
                        <AlreadyAddedPopup open={this.state.openAlreadyAddedPopup}></AlreadyAddedPopup>}
                </div>
        </div>
    }
}

export default Cards;