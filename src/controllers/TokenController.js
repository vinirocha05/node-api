import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenControler {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) return res.status(401).json({ errors: ['Credenciais inválidas'] });

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ errors: ['Usuário não existe'] });

    if (!(await user.passwordIsValid(password))) res.status(401).json({ errors: ['Senha inválida'] });
    const { id } = req.body;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).json({ token });
  }
}

export default new TokenControler();
