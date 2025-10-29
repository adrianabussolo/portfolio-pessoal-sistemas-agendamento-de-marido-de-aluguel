const express = require('express');
const servicosRoutes = require('./routes/servicos');
const authRoutes = require('./routes/auth');
const swaggerRoutes = require('./routes/swagger');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/servicos', servicosRoutes);
app.use('/docs', swaggerRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
