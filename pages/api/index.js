export default async function handler(req, res) {
  try {
    const server = await fetch(`${process.env.SERVER_WEBSITE}`);
    res.status(server.status).json({ message: 'Server is online' });
  } catch {
    res.status(500).json({ message: 'Server malfunctioning' });
  }
}
