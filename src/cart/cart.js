import React from 'react';
import './cart.css';
import Products from './components/products';
import Summary from './components/summary';

class Cart extends React.Component {

    render() {
        return (
            <section className="cart__body">
                <div className="cart__container">
                    <div className="product__list">
                        <Products /> 
                    </div>
                    <div className="summary">
                        <Summary />
                    </div>
                    <div className="payments">

                    </div>
                </div>
            </section>
        )
    }
}

export default Cart;