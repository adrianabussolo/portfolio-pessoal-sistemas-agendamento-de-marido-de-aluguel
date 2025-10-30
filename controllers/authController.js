const jwt = require('jsonwebtoken');

// Usuário fixo para exemplo
const usuario = {
  id: 1,
  username: 'admin',
  password: 'admin123',
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username !== usuario.username || password !== usuario.password) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: usuario.id, username: usuario.username }, process.env.JWT_SECRET || 'segredo', { expiresIn: '2d' });
  res.json({ token });
};
