import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../products';
import { Card } from '@material-ui/core';

class Cards extends React.Component {
    state = {
        products: products
    }

    render() {
        return <div>
            {
                this.state.products.map(product => (
                    <div style={{ marginBottom: '20px'}} key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    }
}

export default Cards;