import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('imagefile');

class ImageController {
  async store(request, response) {
    return upload(request, response, (error) => {
      if (error) {
        return response.status(400).json({
          errors: [error.code],
        });
      }

      return response.json(request.file);
    });
  }
}

export default new ImageController();
