import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(request, response) {
    try {
      const users = await User.findAll();
      console.log('USER ID', request.userId);
      console.log('USER EMAIL', request.userEmail);
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  // Show
  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);
      return response.json(user);
    } catch (e) {
      return response.json(null);
    }
  }

  // Update
  async update(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({
          errors: ['Missing user ID.'],
        });
      }

      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({
          errors: ['User not exists.'],
        });
      }

      const newData = await user.update(request.body);
      return response.json(newData);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({
          errors: ['Missing user ID.'],
        });
      }

      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({
          errors: ['User not exists.'],
        });
      }

      await user.destroy();
      return response.json(user);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
