const { Client } = require("pg");
class loginController {
  async index() {
    try {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false, // rejectionUnauthorized: false, este talves erra o erro
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM login");
      client.end();
      const results = result.rows;
      return results;
    } catch (err) {
      console.error(err);
      return response.json(err);
    }
  }
}
module.exports = loginController;
/*
    async create(nome,email,telefone,idlocal,idtipocontato) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false, // rejectionUnauthorized: false, este talves erra o erro


                },
            });
            const text = "INSERT INTO contato (nome,email,telefone,idlocal,idtipocontato) VALUES  ($1,$2,$3,$4,$5)";
            const parametros = [nome, email, telefone, idlocal, idtipocontato];
            client.connect();
            const result = await client.query(text, parametros);
            client.end();
            const response = {
                message: "cadastrado",
            }
            return response;
        } catch (err) {
            console.error(err);
            const response = {
                message: "erro",
            };
            return response;
        }

    }  */
