const connection = require("../database/connection");

const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("orcamentos").count();

    const orcamentos = await connection("orcamentos")
      .limit(10)
      .offset((page - 1) * 10)
      .select("*");

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(orcamentos);
  },

  async create(request, response) {
    const id = crypto.randomBytes(4).toString("HEX");

    const dataCadastro = new Date().toLocaleString();

    const {
      nome,
      email,
      celular,
      produto,
      peso,
      valor,
      origem,
      destino,
      observacao
    } = request.body;

    const status = "Não respondida";

    await connection("orcamentos").insert({
      id,
      dataCadastro,
      nome,
      email,
      celular,
      produto,
      peso,
      valor,
      origem,
      destino,
      status,
      observacao
    });

    return response.json({ id });
  },

  async update(request, response) {
    try {
      const { id } = request.params;
      const { status } = request.body;

      await connection("orcamentos").update({ status: status }).where('id', id);
      return response.send();
    } catch (error) {
        console.log('erro');
    }
  },
};
