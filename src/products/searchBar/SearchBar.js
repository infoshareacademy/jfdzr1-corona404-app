import React from "react";
import PriceSlider from "./PriceSlider";
import InputSearch from "./InputSearch";
import CategorySearch from "./CategorySearch";
import "./searchBar.css";

const DATABASE_URL = "https://corona404-2499f.firebaseio.com";

class SearchBar extends React.Component {
  state = {
    productList: [],
    filteredList: [],
    filter: "",
    priceMin: 0,
    priceMax: 1000,
    productsPerPage: 8,
    isLoading: true,
  };
  fetchData = () => {
    fetch(`${DATABASE_URL}/products.json`)
      .then((response) => response.json())
      .then((products) => {
        const arrayProducts = products
          ? Object.keys(products).map((key) => {
              return {
                id: key,
                ...products[key],
              };
            })
          : [];

        this.setState({
          productsList: arrayProducts,
          filteredList: arrayProducts,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }
  applyFilter = () => {
    this.setState({
      filteredList: this.state.productList
        .filter((product) => {
          return product.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase());
        })
        .filter((product) => {
          return (
            product.price.value >= this.state.priceMin &&
            product.price.value <= this.state.priceMax
          );
        }),
    });
  };
  handleOnSliderChange = (upDateRange) => {
    this.setState(
      {
        priceMin: upDateRange[0],
        priceMax: upDateRange[1],
      },
      () => {
        this.applyFilter();
      }
    );
  };
  handleOnFormChange = (textFilter) => {
    this.setState(
      {
        filter: textFilter,
      },
      () => {
        this.applyFilter();
      }
    );
  };
  render() {
    return (
      <>
        <div className={"searchWrapper"}>
          <div className={"flexBar"}>
            <div className={"inputForm"}>
              <InputSearch
                onFormChange={this.handleOnFormChange}
                filterValue={this.state.filter}
              />
            </div>

            <div className={"slider"}>
              <PriceSlider
                onSliderChange={this.handleOnSliderChange}
                priceMin={this.state.priceMin}
                priceMax={this.state.priceMax}
              />
            </div>

            <div className={"dropdown"}>
              <CategorySearch />
            </div>
          </div>
        </div>
        <div className={"lineWrapper"}>
          <hr className={"borderLine"} />
        </div>
      </>
    );
  }
}

export default SearchBar;
