import React from "react"
import Dashboard from './dashboard/dashboard'
import Cart from './cart/cart'
import Cards from './products/productCards/Cards'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navigation from './navigation/navigation'
import Form from './form/Form';


function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/products">
          <Cards />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
