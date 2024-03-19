import Student from '../models/Student';

class HomeController {
  async index(request, response) {
    const newStudent = await Student.create({
      name: 'Maria',
      lastname: 'Miranda',
      email: 'maria@email.com',
      age: 23,
      weight: 57,
      height: 170,
    });
    response.json(newStudent);
  }
}

export default new HomeController();
