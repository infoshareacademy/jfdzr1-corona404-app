import React from 'react';
import './cart.css';
import Products from './components/products';
import Summary from './components/summary';

class Cart extends React.Component {

    state = {
        products: [{
            "id": 2,
            "name": "Bawełniana ECO Koszulka",
            "category": "clothes",
            "price": {
                "value": 124.99,
                "unit": 1
            },
            "image": "https://1.allegroimg.com/s512/0320f0/3541c61d4c2cbdadea6c3720d821/Koszulka-bawelniana-T-shirt-ADLER-MALFINI-132-S",
            "opis": "Koszulka z ekologicznej bawełny",
            "origin": "Pomorskie",
            "delivery": [{
                "company": "DHL",
                "price": 20,
                "unitlimit": false
            }]
        },
        {
            "id": 3,
            "name": "Buty Skórzane",
            "category": "clothes",
            "price": {
                "value": 229.99,
                "unit": 1
            },
            "image": "https://sklepmarka.pl/2321/buty-meskie-casual-skora-polskie-g2681.jpg",
            "opis": "Eleganckie buty ze skóry ekologicznej",
            "origin": "Podkarpackie",
            "delivery": [{
                "company": "DHL",
                "price": 20,
                "unitlimit": false
            }]
        },
        {
            "id": 4,
            "name": "Wełniany szal",
            "category": "clothes",
            "price": {
                "value": 80.99,
                "unit": 1
            },
            "image": "https://cdn.shoplo.com/5412/products/th640/aaag/20-3c11a2dc56b112cddf7c2d53c4dd36f05d6d1074cfb136-22531055.jpg",
            "opis": "Ciepły szal z owczej wełny",
            "origin": "Pomorskie",
            "delivery": [{
                "company": "DHL",
                "price": 10,
                "unitlimit": false
            }]
        }],
        totalPrice: 0,
        sendPrice: 25,
        finalPrice: 0,
    }

    handleOnDelete = (productId) => {
        let newTotalPrice = 0;

        let filteredArray = this.state.products.filter((product) => {
            return product.id !== productId
        })

        filteredArray.forEach((prod) => {
            newTotalPrice += prod.price.value * prod.price.unit
        })

        this.setState({
            products: filteredArray,
            totalPrice: newTotalPrice.toFixed(2)
        })
    }

    componentDidMount() {
        this.state.products.forEach((prod) => {
            this.state.totalPrice += prod.price.value * prod.price.unit
        })
        this.setState({
            totalPrice: this.state.totalPrice.toFixed(2)
        })
    }

    handleOnChange = (event, product) => {
        let productIndex = this.state.products.map(function (e) { return e.id; }).indexOf(product.id);
        const productList = this.state.products
        productList[productIndex].price.unit = event.target.value

        let totalPrice = 0;

        productList.forEach((prod) => { totalPrice += prod.price.value * prod.price.unit })

        this.setState({
            products: productList,
            totalPrice: totalPrice.toFixed(2)
        })
    }

    render() {
        return (
            <section className="cart__body">
                <div className="cart__container">
                    <div className="product__list">
                        <Products
                            products={this.state.products}
                            handleOnDelete={this.handleOnDelete}
                            handleOnChange={this.handleOnChange}
                        />
                    </div>
                    <div className="summary">
                        <Summary
                            totalPrice={this.state.totalPrice}
                            sendPrice={this.state.sendPrice}
                        />
                    </div>
                    <div className="payments">

                    </div>
                </div>
            </section>
        )
    }
}

export default Cart;