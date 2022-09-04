import Aluno from '../models/Aluno';

class AlunoControler {
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, email } = novoAluno;
      res.json({ id, nome, email });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(alunos);
    } catch (e) {
      return res.status(401).json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }
      const { id, nome, email } = aluno;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno não existe'],
        });
      }

      const newData = await aluno.update(req.body);
      const { id, nome, email } = newData;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
  // delete

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          error: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: [e.errors.map((err) => err.message)] });
    }
  }
}

export default new AlunoControler();
