import React from "react";
import ProductCard from "./ProductCard";
import AddedPopup from "./AddedPopup";
import AlreadyAddedPopup from "./AlreadyAddedPopup";
import "../products.css";
import PriceSlider from "../searchBar/PriceSlider";
import InputSearch from "../searchBar/InputSearch";
import CategorySearch from "../searchBar/CategorySearch";
import "../searchBar/searchBar.css";
import BasicPagination from "../searchBar/Pagination";
import PageWrapper from "../searchBar/PageWrapper";
import CircularProgress from "@material-ui/core/CircularProgress";
// import ProductList from "../searchBar/ProductList";
import ErrorDiv from "../searchBar/error";
import RadioButtonsGroup from "../searchBar/ProductsPerPage";

const DATABASE_URL = "https://corona404-2499f.firebaseio.com";

class Cards extends React.Component {
  state = {
    products: [],
    productsInCart: [],
    openAddedPopup: false,
    openAlreadyAddedPopup: false,
    filteredList: [],
    productCategory: [],
    filter: "",
    priceMin: 0,
    priceMax: 300,
    currentPage: 1,
    productsPerPage: 8,
    isLoading: true,
  };

  fetchData = () => {
    if (localStorage.getItem("productsID") !== null) {
      this.setState({
        productsInCart: JSON.parse(localStorage["productsID"]),
      });
    }
    fetch(`${DATABASE_URL}/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data
          ? Object.keys(data).map((key) => {
              return {
                id: key,
                ...data[key],
              };
            })
          : [];
        this.setState({
          products: formattedData,
          filteredList: formattedData,
          isLoading: false,
        });
      });
  };
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    localStorage["productsID"] = JSON.stringify(this.state.productsInCart);
  }

  handleAddToCart = (passedProduct) => {
    if (
      this.state.productsInCart.find((product) => product === passedProduct.id)
    ) {
      this.setState({
        openAlreadyAddedPopup: true,
      });

      setTimeout(() => {
        this.setState({
          openAlreadyAddedPopup: false,
        });
      }, 2000);
    } else {
      this.setState({
        productsInCart: [...this.state.productsInCart, passedProduct.id],
        openAddedPopup: true,
      });

      setTimeout(() => {
        this.setState({
          openAddedPopup: false,
        });
      }, 2000);
    }
  };

  applyFilter = () => {
    this.setState({
      filteredList: this.state.products
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
        })
        .filter((product) => {
          switch (this.state.productCategory) {
            case 10:
              return product.category == "food";
            case 20:
              return product.category == "drinks";
            case 30:
              return product.category == "clothes";
            case 40:
              return product.category == "others";
            default:
              return product;
          }
        }),

      currentPage: 1,
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
  productsPerPageChanged = (value) => {
    this.setState({
      productsPerPage: value,
    });
  };
  pageChanged = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  handleOnDropDownChange = (newDropDownValue) => {
    this.setState(
      {
        productCategory: newDropDownValue,
      },
      () => {
        this.applyFilter();
      }
    );
  };

  render() {
    const lastIndex = this.state.currentPage * this.state.productsPerPage;
    const firstIndex = lastIndex - this.state.productsPerPage;

    return (
      <div
        style={{ display: "flex", justifyContent: "center", margin: " 0 auto" }}
      >
        <div className="sectionWrapper">
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
              <CategorySearch
                onDropDownChange={this.handleOnDropDownChange}
                dropDownValue={this.state.productCategory}
              />
            </div>
          </div>

          <div className={"lineWrapper"}>
            <hr className={"borderLine"} />
          </div>

          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            {/* <RadioButtonsGroup
              onProductsPerPageChanged={this.productsPerPageChanged}
            /> */}
          </div>

          {this.state.isLoading ? (
            <PageWrapper>
              <CircularProgress size="350px" />
            </PageWrapper>
          ) : (
            <>
              {this.state.filteredList.length > 0 ? (
                <div className="sectionLayout">
                  {this.state.filteredList
                    .slice(firstIndex, lastIndex)
                    .map((product) => {
                      return (
                        <ProductCard
                          key={product.id}
                          product={product}
                          handleAddToCart={this.handleAddToCart}
                        />
                      );
                    })}
                </div>
              ) : (
                <ErrorDiv />
              )}

              <div>
                {this.state.openAddedPopup === true && (
                  <AddedPopup open={this.state.openAddedPopup}></AddedPopup>
                )}
              </div>
              <div>
                {this.state.openAlreadyAddedPopup === true && (
                  <AlreadyAddedPopup
                    open={this.state.openAlreadyAddedPopup}
                  ></AlreadyAddedPopup>
                )}
              </div>
              {/* <BasicPagination
                productsPerPage={this.state.productsPerPage}
                productsLength={this.state.filteredList.length}
                updatePage={this.pageChanged}
              /> */}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cards;
