import User from '../models/User';

class UserControler {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (e) {
      console.log(e.errors.map((err) => err.message));
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
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
