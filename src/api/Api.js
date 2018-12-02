import axios from 'axios';

export default class Api {
  DEVELOPER_KEY = 'maximtop';
  BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend';

  async makeRequest(path, method = 'POST', config) {
    const { params } = config;

    const newConfig = {
      ...config,
      params: {
        ...params,
        developer: this.DEVELOPER_KEY,
      },
    };

    const response = await axios({
      url: `${this.BASE_URL}/${path}`,
      method,
      ...newConfig,
    });
    return response.data;
  }

  // methods
  GET_TASKS = { path: '', method: 'GET' };
  CREATE_TASK = { path: 'create', method: 'POST' };

  async getTasks(page) {
    const { path, method } = this.GET_TASKS;
    const config = {
      params: {
        page,
      },
    };
    return this.makeRequest(path, method, config);
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
