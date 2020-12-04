import React from "react"
import Dashboard from './dashboard/dashboard'
import Cart from './cart/cart'
import Cards from './products/productCards/Cards'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import  Navigation  from './navigation/navigation'
import Form from './form/Form';
import {Sign} from "./login/Sign"
import {Auth} from "./Auth"
import { Profile } from './login/Profile'


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
          <Auth>
          <Form />
          </Auth>
        </Route>
        <Route path="/profile">
          <Auth>
          <Profile />
          </Auth>
        </Route>
        <Route path="/sign-in">
          <Sign/>
        </Route>
        <Route path="/sign-up">
            <Sign isSignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
