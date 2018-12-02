import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import Tasks from '../Tasks';
import Login from '../Login';
import Header from '../Header';
import NewTask from '../NewTask';
import store from '../../Store/TasksStore';

@withRouter
@observer
class App extends Component {
  render() {
    const tasks = store.getTasks;
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact render={() => <Tasks tasks={tasks} />} />
          <Route path="/login" component={Login} />
          <Route path="/new-task" component={NewTask} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
