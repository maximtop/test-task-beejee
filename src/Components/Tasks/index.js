import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Task from '../Task';
import store from '../../Stores/TasksStore';

@observer
class Tasks extends Component {

  renderTasks = tasks => tasks.map(task => <Task task={task} key={task.id} />);

  handlePageClick = (data) => {
    const { selected } = data;
    store.handleCurrentPage(selected);
  };

  render() {
    const defaultPageRange = 3;
    const tasksToShow = store.getTasks;
    const pageCount = Number(store.totalTasks) / defaultPageRange;
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
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
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

export default Tasks;
