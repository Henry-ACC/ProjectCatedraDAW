import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import TablaVentas from './TablaVentas'; 

function Routes() {
  return (
    <Router>
      <Switch>
  <Route exact path="/" component={App} />
  <Route path="/TablaVentas" component={TablaVentas} />
</Switch>

    </Router>
  );
}

export default Routes;
