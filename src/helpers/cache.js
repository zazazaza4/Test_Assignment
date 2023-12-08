const CACHE_PREFIX = 'myAppCache_';

export const setCache = async (key, data, ttl) => {
  const cacheKey = `${CACHE_PREFIX}${key}`;

  const cache = await caches.open(cacheKey);
  const cacheData = new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `max-age=${ttl / 1000}`,
    },
  });

  await cache.put(cacheKey, cacheData);
};

export const getCache = async (key) => {
  const cacheKey = `${CACHE_PREFIX}${key}`;

  const cache = await caches.open(cacheKey);
  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) {
    const cachedData = await cachedResponse.json();
    return cachedData;
  }

  return null;
};

export const clearCache = async (key) => {
  const cacheKey = `${CACHE_PREFIX}${key}`;

  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name === cacheKey)
      .map((name) => caches.delete(name)),
  );
};
