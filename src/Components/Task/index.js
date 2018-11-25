import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    const {
      task: {
        id, username, email, text,
      },
    } = this.props;
    return (
      <div className="row">
        <div className="col">
          <div>{id}</div>
          <div>{text}</div>
          <div>{username}</div>
          <div>{email}</div>
        </div>
      </div>
    );
  }
}
