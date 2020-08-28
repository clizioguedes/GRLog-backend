const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { email, senha } = request.body;

        const user = await connection("users")
            .where("email", email)
            .andWhere("senha", senha)
            .select("nome")
            .first();
  
      if (!user) {
        return response
          .status(400)
          .json({ error: "O usuário informado não existe" });
      }

      return response.json(user);
    }
}