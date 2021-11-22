const PORT = 3000;
const dev = process.env.NEXT_PUBLIC_VERCEL_ENV == 'development';

export const server = dev ? `http://localhost:${PORT}` : ``;
