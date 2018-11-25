import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Tasks from '../Tasks';
import Header from '../Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default hot(module)(App);
