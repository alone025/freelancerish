import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

const uploadImage = async (req, res) => {
    const form = formidable({ multiples: true }); // Create the form with the new import method
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error parsing the files' });
        }

        const filePath = files.file[0].filepath; // Get the file path correctly
        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'my_website_images',
                tags: ['website_image', 'example'],
                context: 'alt=My sample image|caption=This is a sample image for my website',
            });
            fs.unlinkSync(filePath); // Remove the file after upload
            res.status(200).json({ success: true, result });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });
};

export default uploadImage;
