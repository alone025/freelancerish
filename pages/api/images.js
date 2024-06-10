import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function fetchAllImages(req, res) {
    try {
        let images = [];
        let nextCursor = null;

        do {
            const response = await cloudinary.api.resources({
                type: 'upload',
                prefix: 'my_website_images/',
                max_results: 10,
                next_cursor: nextCursor,
                tags: true,
                context: true,
            });
            images = images.concat(response.resources);
            nextCursor = response.next_cursor;
        } while (nextCursor);

        res.status(200).json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};
