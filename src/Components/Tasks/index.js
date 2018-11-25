import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Task from '../Task';

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageDisplayed: 3,
    };
  }

  renderTasks = tasks => tasks.map(task => <Task task={task} key={task.id}/>);

  handlePageClick = (data) => {
    const { selected } = data;
    this.setState(() => ({ offset: selected }));
  };

  render() {
    const { tasks } = this.props;
    const { pageDisplayed, offset } = this.state;
    const tasksToShow = tasks.slice(offset * pageDisplayed, (offset + 1) * pageDisplayed);
    const pageCount = tasks.length / 3;
    return (
      <div className="col">
        {this.renderTasks(tasksToShow)}
        <ReactPaginate
          previousLabel="prev"
          nextLabel="next"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={pageDisplayed}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}
