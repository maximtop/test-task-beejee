import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

import './styles.css';

export default class NewTask extends Component {
  state = {
    username: '',
    email: '',
    taskDescription: '',
    image: '',

  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  validateForm() {
    const { email, username, taskDescription } = this.state;
    return username.length > 0
      && email.length > 0
      && taskDescription.length > 0;
  }

  render() {
    const {
      email,
      taskDescription,
      username,
      image,
    } = this.state;

    return (
      <div className="NewTask">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username" size="large">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={username}
              onChange={this.handleChange}
              autoComplete="username"
            />
          </Form.Group>
          <Form.Group controlId="email" size="large">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={this.handleChange}
              autoComplete="email"
              type="email"
            />
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              onChange={this.handleChange}
              value={taskDescription}
            />
          </Form.Group>
          <Form.Group controlId="image" size="large">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={image}
              onChange={this.handleChange}
              type="file"
            />
          </Form.Group>

          <Button
            block
            size="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Add new task
          </Button>
        </Form>
      </div>
    );
  }
}
