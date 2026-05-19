import { FastifyInstance } from "fastify";
import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./data1.db");

const usersRoute = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached usersRoute" });
  });

  type GetUserBody = { email: string };
  server.post<{ Body: GetUserBody }>("/list", async (req, res) => {
    const { email } = req.body;

    const query = db.prepare("SELECT * FROM users WHERE email = (?)");
    const result = query.get(email);

    if (result) {
      res.code(200).send(result);
    } else {
      res.code(404).send({ message: "Not found" });
    }
  });

  type GetUserParams = { email: string };
  server.get<{ Params: GetUserParams }>("/list", async (req, res) => {
    const { email } = req.params;
    res.code(200).send({ message: "GET req on /list working!" });
  });
};

export default usersRoute;
