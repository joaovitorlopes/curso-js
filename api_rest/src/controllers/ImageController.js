import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Image from '../models/Image';

const upload = multer(multerConfig).single('imagefile');

class ImageController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = request.file;
      const { student_id } = request.body;
      const image = await Image.create({ originalname, filename, student_id });

      return response.json(image);
    });
  }
}

export default new ImageController();
