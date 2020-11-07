import React from 'react';
import ProductCard from './ProductCard';
import '../products.css';

class Cards extends React.Component {
    // state = {
    //     products: products
    // }

    products = fetch(process.env.PUBLIC_URL + '/product-list.json')
    .then(r => r.json())
    .then(products => {
        this.setState({
            products: products
        })
    });

    
    // componentDidMount() {
    //     fetch('%PUBLIC_URL%/product-list.json')
    //         .then(r => r.json())
    //         .then(products => {
    //             this.setState({
    //                 products: products
    //             })
    //         })
    // }
    
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