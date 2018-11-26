import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Tasks from '../Tasks';
import Login from '../Login';
import Header from '../Header';

// import 'bootstrap/dist/css/bootstrap.min.css';

const tasks = [
  {
    id: 1,
    username: 'Test User 1',
    email: 'test_user_1@example.com',
    text: 'Hello, world from user 1!',
    status: 10,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
  },
  {
    id: 2,
    username: 'Test User 2',
    email: 'test_user_2@example.com',
    text: 'Hello from user 2!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
  },
  {
    id: 3,
    username: 'Test User 3',
    email: 'test_user_3@example.com',
    text: 'Hello from user 3!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
  },
  {
    id: 4,
    username: 'Test User 4',
    email: 'test_user_4@example.com',
    text: 'Hello from user 4!',
    status: 10,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
  },
  {
    id: 5,
    username: 'Test User 1',
    email: 'test_user_`@example.com',
    text: 'Hello from user 1!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
  },
  {
    id: 6,
    username: 'Test User 2',
    email: 'test_user_2@example.com',
    text: 'Hello from user 2!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
  },
  {
    id: 7,
    username: 'Test User 4',
    email: 'test_user_4@example.com',
    text: 'Hello from user 4!',
    status: 10,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
  },
  {
    id: 8,
    username: 'Test User 1',
    email: 'test_user_`@example.com',
    text: 'Hello from user 1!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
  },
  {
    id: 9,
    username: 'Test User 2',
    email: 'test_user_2@example.com',
    text: 'Hello from user 2!',
    status: 0,
    image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
  },
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact render={() => <Tasks tasks={tasks} />} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
