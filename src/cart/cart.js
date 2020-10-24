import React from 'react';
import './cart.css';
import Products from './components/products';
import Summary from './components/summary';

class Cart extends React.Component {

  state = {
    products: [
      {
        "id": 2,
        "name": "Bawełniana ECO Koszulka",
        "category": "clothes",
        "price": {
          "value": 124.99,
          "unit": "szt",
          "amount": 1
        },
        "image": "https://1.allegroimg.com/s512/0320f0/3541c61d4c2cbdadea6c3720d821/Koszulka-bawelniana-T-shirt-ADLER-MALFINI-132-S",
        "description": "Koszulka z ekologicznej bawełny",
        "origin": "Pomorskie",
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
          "value": 119.99,
          "unit": "szt",
          "amount": 1
        },
        "image": "https://cdn.shoplo.com/5412/products/th640/aaag/20-3c11a2dc56b112cddf7c2d53c4dd36f05d6d1074cfb136-22531055.jpg",
        "description": "Ciepły szal z owczej wełny",
        "origin": "Pomorskie",
        "delivery": [{
          "company": "DHL",
          "price": 10,
          "unitlimit": false
        }]
      },
      {
        "id": 5,
        "name": "Maseczka ochronna 404",
        "category": "others",
        "price": {
          "value": 4.04,
          "unit": "szt",
          "amount": 1
        },
        "image": "https://image.ceneostatic.pl/data/products/92754271/i-mitex-maseczka-ochronna-z-filtrem-czern.jpg",
        "description": "Maseczka ochronna, chroniąca przed wirusami i bakteriami",
        "origin": "Mazowieckie",
        "delivery": [{
          "company": "DHL",
          "price": 5,
          "unitlimit": false
        }]
      },],
    totalPrice: 0,
    sendPrice: 25,
  }

  handleOnDelete = (productId) => {
    let newTotalPrice = 0;

    let filteredArray = this.state.products.filter((product) => {
      return product.id !== productId
    })

    filteredArray.forEach((prod) => {
      newTotalPrice += prod.price.value * prod.price.amount
    })

    this.setState({
      products: filteredArray,
      totalPrice: newTotalPrice.toFixed(2)
    })
  }

  componentDidMount() {
    this.state.products.forEach((prod) => {
      this.state.totalPrice += prod.price.value * prod.price.amount
    })
    this.setState({
      totalPrice: this.state.totalPrice.toFixed(2)
    })
  }

  handleOnChange = (event, product) => {
    let productIndex = this.state.products.map(function (e) { return e.id; }).indexOf(product.id);
    const productList = this.state.products
    productList[productIndex].price.amount = event.target.value

    let totalPrice = 0;

    productList.forEach((prod) => { totalPrice += prod.price.value * prod.price.amount })

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
        </div>
      </section>
    )
  }
}

export default Cart;