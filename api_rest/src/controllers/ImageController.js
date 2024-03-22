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
      try {
        const { originalname, filename } = request.file;
        const { student_id } = request.body;
        const image = await Image.create({ originalname, filename, student_id });
        const { id } = image;
        return response.json({
          id,
          originalname,
          filename,
          student_id,
        });
      } catch (e) {
        return response.status(400).json({
          errors: ['Student does not exist.'],
        });
      }
    });
  }
}

export default new ImageController();
