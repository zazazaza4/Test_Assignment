import axios from '@/helpers/axios';

import { TokenService } from './token.service';

const UserService = {
  async getByPage(page, count = 6) {
    return await axios.get(`/users`, {
      params: {
        page,
        count,
      },
    });
  },

  async create(data) {
    const Token = await TokenService.get();
    return await axios.post('/users', data, { headers: { Token } });
  },
};

export { UserService };
