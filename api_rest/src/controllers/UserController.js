import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const newUser = await User.create(request.body);
      const { id, name, email } = newUser;
      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(request, response) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return response.json(users);
    } catch (e) {
      return response.json(null);
    }
  }

  // Show
  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);

      const { id, name, email } = user;
      return response.json({ id, name, email });
    } catch (e) {
      return response.json(null);
    }
  }

  // Update
  async update(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (!user) {
        return response.status(400).json({
          errors: ['User not exists.'],
        });
      }

      const newData = await user.update(request.body);
      const { id, name, email } = newData;
      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (!user) {
        return response.status(400).json({
          errors: ['User not exists.'],
        });
      }

      await user.destroy();
      return response.json(null);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
