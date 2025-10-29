const Servico = require('../model/Servico');
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

}

module.exports = ServicoService;
