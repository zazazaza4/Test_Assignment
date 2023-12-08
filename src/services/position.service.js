import axios from '@/helpers/axios';

const PositionService = {
  async get() {
    return await axios.get(`/positions`);
  },
};

export { PositionService };
