import React from 'react';
import Dashboard from './dashboard/dashboard'
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
