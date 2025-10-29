class Servico {
  constructor({ id, cliente, descricao, data, status }) {
    this.id = id;
    this.cliente = cliente;
    this.descricao = descricao;
    this.data = data;
    this.status = status;
  }
}

module.exports = Servico;
