const Servico = require('../model/servico');
const servicos = require('../model/servicosDb');
const { v4: uuidv4 } = require('uuid');

class ServicoService {
  static listar() {
    return servicos;
  }

  static buscarPorId(id) {
    return servicos.find(s => s.id === id);
  }

  static criar(dados) {
    const servico = new Servico({ id: uuidv4(), ...dados });
    servicos.push(servico);
    return servico;
  }

  static atualizar(id, dados) {
    const idx = servicos.findIndex(s => s.id === id);
    if (idx === -1) return null;
    servicos[idx] = { ...servicos[idx], ...dados };
    return servicos[idx];
  }
}

module.exports = ServicoService;
