const SERVER_PORT = 4000; //
const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? `http://localhost:${SERVER_PORT}`
  : process.env.SERVER_WEBSITE; // Server website
