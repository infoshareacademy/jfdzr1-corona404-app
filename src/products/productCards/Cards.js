import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../products';
import '../products.css';

class Cards extends React.Component {
    state = {
        products: products
    }
    
    render() {
        return <div className="sectionLayout">

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