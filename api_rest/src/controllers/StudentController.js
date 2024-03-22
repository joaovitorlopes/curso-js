import Student from '../models/Student';
import Image from '../models/Image';

class StudentController {
  async index(request, response) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Image, 'id', 'DESC']],
      include: {
        model: Image,
        attributes: ['filename'],
      },
    });
    response.json(students);
  }

  async store(request, response) {
    try {
      const student = await Student.create(request.body);

      return response.json(student);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['filename'],
        },
      });

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      return response.json(student);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      await student.destroy();
      return response.json({
        deleted: true,
      });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return response.status(400).json({
          errors: ['Student does not exists'],
        });
      }

      const newStudent = await student.update(request.body);
      const { name, email } = newStudent;
      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
