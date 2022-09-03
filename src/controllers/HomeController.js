import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const newStudent = await Aluno.create({
      nome: 'Vini',
      sobrenome: 'Rocha',
      email: 'vini@gmail.com',
      idade: 23,
      peso: 80,
      altura: 173,

    });
    res.json(newStudent);
  }
}

export default new HomeControler();
