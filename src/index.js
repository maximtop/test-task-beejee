import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const tasks = [
  {
    'id': 1,
    'username': 'Test User 1',
    'email': 'test_user_1@example.com',
    'text': 'Hello, world from user 1!',
    'status': 10,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
  },
  {
    'id': 2,
    'username': 'Test User 2',
    'email': 'test_user_2@example.com',
    'text': 'Hello from user 2!',
    'status': 0,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
  },
  {
    'id': 3,
    'username': 'Test User 3',
    'email': 'test_user_3@example.com',
    'text': 'Hello from user 3!',
    'status': 0,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
  },
  {
    'id': 4,
    'username': 'Test User 4',
    'email': 'test_user_4@example.com',
    'text': 'Hello from user 4!',
    'status': 10,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
  },
  {
    'id': 5,
    'username': 'Test User 1',
    'email': 'test_user_`@example.com',
    'text': 'Hello from user 1!',
    'status': 0,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
  },
  {
    'id': 6,
    'username': 'Test User 2',
    'email': 'test_user_2@example.com',
    'text': 'Hello from user 2!',
    'status': 0,
    'image_path': 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
  },
];

ReactDOM.render(<App tasks={tasks} />, document.getElementById('root'));
