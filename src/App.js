import React from 'react';
import Dashboard from './dashboard/dashboard'
import {Route, Switch} from "react-router-dom";
import Cards from './products/productCards/Cards';

function App() {

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/product-card">
        <Cards/>
      </Route>
    </Switch>
  );
}

export default App;
