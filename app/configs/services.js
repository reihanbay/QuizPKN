import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  quiz: async params => get('/api/quiz/all', params),
  login: async params => post('/api/users/login', params),
  register: async params => post('/api/users/register', params)
};

export default { endpoint };
