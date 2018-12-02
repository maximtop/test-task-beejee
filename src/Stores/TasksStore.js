import { observable, action, computed } from 'mobx';
import Api from '../api/Api';

class TasksStore {
  @observable tasks = [];
  @observable totalTasks;
  @observable currentPage = 1;

  @observable isLoading = true;

  constructor() {
    this.api = new Api();
    this.loadTasks(this.currentPage);
  }

  @action
  async loadTasks(page) {
    this.isLoading = true;
    const response = await this.api.getTasks(page);
    const { status, message: { tasks, total_task_count: totalTasks } } = response;
    if (status === 'ok') {
      this.isLoading = false;
      this.error = '';
      this.tasks = tasks;
      this.totalTasks = totalTasks;
    } else {
      this.isLoading = false;
      this.error = 'Some error happened';
    }
  }

  @action
  handleCurrentPage = async (page) => {
    this.currentPage = page + 1;
    await this.loadTasks(this.currentPage);
  };

  @action
  createTask = async (task) => {
    await this.api.createTask(task);
  };

  @computed
  get getTasks() {
    return this.tasks;
  }

  @computed
  get tasksLength() {
    return this.tasks.length;
  }
}

export default new TasksStore();
