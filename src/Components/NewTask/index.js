import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import { resizeImage } from '../../helpers/image';
import store from '../../Stores/TasksStore';

import './styles.css';

export default class NewTask extends Component {
  state = {
    username: 'maxim',
    email: 'maximtop@gmail.com',
    text: 'test',
    image: '',
  };

  handleChange = async (event) => {
    const { files, id } = event.target;
    if (id === 'image' && files) {
      const file = await resizeImage(files[0]);
      this.setState({
        [id]: file,
      });
      return;
    }

    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { createTask } = store;
    createTask(this.state);
    this.setState(state => ({
      ...state,
      username: '',
      email: '',
      text: '',
      image: '',
    }));
  };

  validateForm() {
    const {
      email,
      username,
      text,
      image,
    } = this.state;

    return username.length > 0
      && email.length > 0
      && text.length > 0
      && image;
  }

  render() {
    const {
      email,
      text,
      username,
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
          <Form.Group controlId="text">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              onChange={this.handleChange}
              value={text}
            />
          </Form.Group>
          <Form.Group controlId="image" size="large">
            <Form.Label>Image</Form.Label>
            <Form.Control
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
