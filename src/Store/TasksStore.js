import { observable, action, computed } from 'mobx';
import Api from '../api/Api';

export class TasksStore {
  @observable tasks = [];

  @observable isLoading = true;

  constructor() {
    this.api = new Api();
    this.loadTasks();
  }

  @action
  async loadTasks() {
    this.isLoading = true;
    const response = await this.api.getTasks();
    const { status, message: { tasks } } = response;
    if (status === 'ok') {
      this.isLoading = false;
      this.error = '';
      this.tasks = [...this.tasks, ...tasks];
    } else {
      this.isLoading = false;
      this.error = 'Some error happened';
    }
  }

  @action
  createTask = async (task) => {
    await this.api.createTask(task);
    this.tasks.push(task);
  };

  @computed
  get getTasks() {
    return this.tasks;
  }
}

export default new TasksStore();
