import React, { Component } from 'react';
import Task from '../Task';

export default class Tasks extends Component {
  renderTasks = tasks => tasks.map(task => <Task task={task} key={task.id} />);

  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <div className="col">
        {this.renderTasks(tasks)}
      </div>
    );
  }
}
