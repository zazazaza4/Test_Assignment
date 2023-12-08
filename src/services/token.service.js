import axios from '@/helpers/axios';
import { getCache, setCache } from '@/helpers/cache';

const CACHE_KEY = 'tokenCache';
const CACHE_TTL = 40 * 60 * 1000;

const TokenService = {
  async get() {
    const cachedData = await getCache(CACHE_KEY);

    if (cachedData) {
      return cachedData;
    }

    try {
      const { data } = await axios.get(`/token`);
      const newToken = data.token;

      await setCache(CACHE_KEY, newToken, CACHE_TTL);

      return newToken;
    } catch (e) {
      console.log(e);
    }
  },
};

export { TokenService };
