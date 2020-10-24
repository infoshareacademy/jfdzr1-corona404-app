import React from 'react';
import Dashboard from './dashboard/dashboard'
import {Route, Switch} from "react-router-dom";
import Cart from './cart/cart';
import MiniDrawer from './navigation/navigation'

function App() {

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </Switch>
    <MiniDrawer/>
  );
}

export default App;
