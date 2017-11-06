import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './containers/Home';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default App;
