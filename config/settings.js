const PORT = 3000;
const dev = process.env.NODE_ENV == 'development';

export const server = dev
  ? `http://localhost:${PORT}`
  : `${process.env.VERCEL_URL}`;
