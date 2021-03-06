import React from "react";
import "./cart.css";
import Products from "./components/products";
import Summary from "./components/summary";
import EmptyBoxSVG from "./components/images/empty.svg";
import ShoppingSVG from "./components/images/shopping.svg";

class Cart extends React.Component {
  state = {
    products: [],
    totalPrice: 0,
    sendPrice: 0,
  };

  handleOnDelete = (productId) => {
    let localStorageIDList = JSON.parse(localStorage["productsID"]);
    let newTotalPrice = 0;

    let filteredArray = this.state.products.filter((product) => {
      return product.id !== productId;
    });

    filteredArray.forEach((prod) => {
      newTotalPrice += prod.price.value * prod.price.amount;
    });

    this.setState({
      products: filteredArray,
      totalPrice: newTotalPrice.toFixed(2),
    });

    const updatedIDlist = localStorageIDList.filter(
      (prod) => prod !== productId
    );

    localStorage["productsID"] = JSON.stringify(updatedIDlist);

    this.handleCountSendPrice();
  };

  async componentDidMount() {
    let productsID;
    if (localStorage.getItem("productsID") === null) {
      productsID = [];
    } else {
      productsID = JSON.parse(localStorage["productsID"]);
    }

    let fetchedList = [];
    let productsToRender = [];
    let sumPrice = 0;

    await fetch("product-list.json")
      .then((res) => res.json())
      .then((data) => {
        fetchedList = data;
      });

    productsID.forEach((id) => {
      fetchedList.forEach((prod) => {
        if (prod.id === id) {
          productsToRender.push(prod);
        }
      });
    });

    productsToRender.forEach((prod) => {
      sumPrice += prod.price.value * prod.price.amount;
    });

    this.setState({
      products: productsToRender,
      totalPrice: sumPrice.toFixed(2),
    });

    this.handleCountSendPrice();
  }

  handleCountSendPrice = () => {
    if (this.state.products.length > 0) {
      let productsArray = this.state.products;
      productsArray.sort(function (a, b) {
        return b.delivery[0].price - a.delivery[0].price;
      });

      let sendPriceToSet = productsArray[0].delivery[0].price;

      this.setState({
        sendPrice: sendPriceToSet,
      });
    } else {
      this.setState({
        sendPrice: 0,
      });
    }
  };

  handleOnAmountChange = (event, product) => {
    let productIndex = this.state.products
      .map(function (e) {
        return e.id;
      })
      .indexOf(product.id);
    const productList = this.state.products;
    productList[productIndex].price.amount = event.target.value;

    let totalPrice = 0;

    productList.forEach((prod) => {
      totalPrice += prod.price.value * prod.price.amount;
    });

    this.setState({
      products: productList,
      totalPrice: totalPrice.toFixed(2),
    });
  };

  render() {
    const productsAmount = this.state.products.length;
    return (
      <section className="cart__body">
        {productsAmount > 0 && (
          <>
            <h1 className="cart__title">Twój Koszyk</h1>
            <img src={ShoppingSVG} alt="shoppingsvg" className="shoppingSVG" />
            <div className="cart__container">
              <div className="product__list">
                <Products
                  products={this.state.products}
                  handleOnDelete={this.handleOnDelete}
                  handleOnAmountChange={this.handleOnAmountChange}
                />
              </div>
              <div className="summary">
                <Summary
                  totalPrice={this.state.totalPrice}
                  sendPrice={this.state.sendPrice}
                />
              </div>
            </div>
          </>
        )}
        {productsAmount === 0 && (
          <>
            <h1 className="cart__title">
              Brak produktów <br /> w koszyku ...
            </h1>
            <img src={EmptyBoxSVG} alt="emptybox" className="cartSVG"></img>
          </>
        )}
      </section>
    );
  }
}

export default Cart;
