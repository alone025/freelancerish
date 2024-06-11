import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { page, pageSize, q } = req.query;

    try {
        const response = await axios.get('https://for-images.kalandarovjamshid01.workers.dev/images', {
            params: { page, pageSize, q },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
