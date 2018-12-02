import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    const {
      task: {
        id, username, email, text, image_path: image,
      },
    } = this.props;
    return (
      <div className="row m-3">
        <div className="col">
          <div>
            Task #
            {id}
          </div>
          <div className="row">
            <div className="col-4">
              <img src={image} alt={`task-${id}`} />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  {text}
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  name:
                  {' '}
                  {username}
                </div>
                <div className="col-4">
                  email:
                  {' '}
                  {email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
