// type = ['small, 'medium', 'large']
let type = 'medium';

const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: `https://restaurant-api.dicoding.dev/images/${type}/`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'IntfdRestaurant-V1',
  DATABASE_NAME: 'intfd-restaurant',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
