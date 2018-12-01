import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';
import Task from '../Task';

export default class Tasks extends Component {
  state = {
    offset: 0,
    pageDisplayed: 3,
  };

  renderTasks = tasks => tasks.map(task => <Task task={task} key={task.id} />);

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
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col d-flex align-items-center">
              <h1>Tasks</h1>
              <Link to="/new-task" className="ml-4"><Button bsstyle="primary">Add new</Button></Link>
            </div>
          </div>
          {this.renderTasks(tasksToShow)}
          <nav aria-label="Pagination">
            <ReactPaginate
              previousLabel="prev"
              nextLabel="next"
              breakLabel="..."
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={pageDisplayed}
              onPageChange={this.handlePageClick}
              containerClassName="pagination justify-content-center"
              activeClassName="active"
              disabledClassName="disabled"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
            />
          </nav>
        </div>
      </div>
    );
  }
}
