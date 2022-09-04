import User from '../models/User';

class UserControler {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(401).json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          error: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      const newData = await user.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
  // delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          error: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          error: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserControler();

/*
nomes de métodos no controller
index - lista todos os usuários - GET
create/store - cria um novo usuário - POST
delete - apaga um usuário - DELETE
show - mostra um usuário - GET
update - atualziar um usuário - PATCH/PUT

*/
