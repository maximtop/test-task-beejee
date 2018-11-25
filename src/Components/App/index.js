import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Tasks from '../Tasks';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Test task for BeeJee</h1>
          </div>
        </div>
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default hot(module)(App);
