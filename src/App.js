import React from 'react';
import Dashboard from './dashboard/dashboard'
import {Route, Switch} from "react-router-dom";
import { productCard } from './products/productCards';

function App() {

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/product-card">
        <productCard/>
      </Route>
    </Switch>
  );
}

export default App;
