import axios from '../utils/axios';
import Message from 'element-plus/lib/el-message';

export let submiting = false;

/**
 * Update All Fund to DB
 */
export function updateAll() {
  if (submiting) return;
  submiting = true;

  return axios
    .post('/fund/syncAll')
    .then((res) => {
      Message.success('同步开启,稍后查看!');
    })
    .finally(() => {
      submiting = false;
    });
}

/**
 * Get all Fund
 */
export function list(p: Pagination) {
  if (submiting) return;
  submiting = true;

  return axios
    .get('/fund')
    .then((res) => {
      return res;
    })
    .finally(() => {
      submiting = false;
    });
}
