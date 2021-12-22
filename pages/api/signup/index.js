import axios from 'axios';

export default async function handler(req, res) {
    let config = {
        method: 'post',
        url: `${process.env.SERVER_WEBSITE}/api/signup`,
        headers: {
            'Content-Type': 'application/json',
        },

        data: JSON.stringify(req.body),
    };

    try {
        const response = await axios(config);

        res.status(response.status).json({ message: 'successfully signed up' });
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
}