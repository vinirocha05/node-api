import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' ');
  console.log(token);

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    console.log(dados);
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expirado ou inválido'] });
  }
};
