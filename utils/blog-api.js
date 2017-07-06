
import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'http://localhost:3333';

export {getBlogPosts};

function getBlogPosts() {
  const url = `${BASE_URL}/api/blog`;
  return axios.get(url).then(response => response.data);
}

// function getPrivateStartupBattles() {
//   const url = `${BASE_URL}/api/battles/private`;
//   return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
// }
