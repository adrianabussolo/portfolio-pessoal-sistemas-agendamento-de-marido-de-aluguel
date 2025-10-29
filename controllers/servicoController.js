const ServicoService = require('../service/servicoService');

exports.listar = (req, res) => {
  res.json(ServicoService.listar());
};

exports.buscarPorId = (req, res) => {
  const servico = ServicoService.buscarPorId(req.params.id);
  if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });
  res.json(servico);
};

exports.criar = (req, res) => {
  const { cliente, descricao, data, status } = req.body;
  if (!cliente || !descricao || !data || !status) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  const servico = ServicoService.criar({ cliente, descricao, data, status });
  res.status(201).json(servico);
};

exports.atualizar = (req, res) => {
  const { cliente, descricao, data, status } = req.body;
  if (!cliente || !descricao || !data || !status) {
    return res.status(400).json({ erro: 'Dados obrigatórios ausentes' });
  }
  const servico = ServicoService.atualizar(req.params.id, { cliente, descricao, data, status });
  if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });
  res.json(servico);
};

exports.remover = (req, res) => {
  const ok = ServicoService.remover(req.params.id);
  if (!ok) return res.status(404).json({ erro: 'Serviço não encontrado' });
  res.status(204).send();
};
