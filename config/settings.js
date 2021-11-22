const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? `http://localhost:${PORT}/`
  : `http://localhost:${PORT}/`;
