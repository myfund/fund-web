import axios from 'axios';
import Message from 'element-plus/lib/el-message';

const R = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL as string,
});

R.interceptors.request.use((config) => {
  if (config.method === 'get') {
    if (!config.params) {
      config.params = {};
    }
    config.params.t = Date.now();
  }

  return config;
});

R.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data as any);
  },
  (error) => {
    const { data } = error.response;
    if (data.message) {
      Message.error(data.message);
    }
    return Promise.reject(error.response?.data?.message);
  },
);

export default R;
