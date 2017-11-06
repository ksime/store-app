import React, { Component } from 'react';

import Header from '../components/Header';
import Catalog from '../components/Catalog';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Catalog />
        <div>Home</div>
      </div>
    );
  }
}

export default Home;
