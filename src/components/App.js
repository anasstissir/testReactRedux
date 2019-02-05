import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import authenticated from '../guards/authenticated';
import Home from '../components/Home';
import PageProf from '../components/prof/pageProf';
import Layout from './layout'

// require('../style/main.scss');

const routes = (
  <div>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/prof" component={PageProf} />
    </Route>
  </div>
);

const App = () => (
  <div className="page">
    <Router history={hashHistory}>
      {routes}
    </Router>
  </div>
);

export default App;
