class ImageController {
  async store(request, response) {
    response.json(request.file);
  }
}

export default new ImageController();
