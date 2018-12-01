import axios from 'axios';

export default class Api {
  DEVELOPER_KEY = 'maximtop';
  BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend/';

  async makeRequest(path, method = 'POST', config) {
    const response = await axios({
      url: `${this.BASE_URL}/${path}?developer=${this.DEVELOPER_KEY}`,
      method,
      ...config,
    });
    return response.data;
  }

  // methods
  GET_TASKS = { path: '', method: 'GET' };
  CREATE_TASK = { path: 'create', method: 'POST' };

  async getTasks() {
    const { path, method } = this.GET_TASKS;
    return this.makeRequest(path, method);
  }

  async createTask(task) {
    const formData = new FormData(task);
    Object.keys(task).forEach((key) => {
      formData.append(key, task[key]);
    });
    const { path, method } = this.CREATE_TASK;
    const config = {
      data: formData,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.makeRequest(path, method, config);
  }
}
