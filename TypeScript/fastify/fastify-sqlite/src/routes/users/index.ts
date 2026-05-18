import { FastifyInstance } from "fastify";
import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./data.db");

const usersRoute = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached usersRoute" });
  });

  type GetUserBody = { email: string };
  server.post<{ Body: GetUserBody }>("/list", async (req, res) => {
    const { email } = req.body;

    const query = db.prepare("SELECT * FROM users WHERE email = (?)");
    const result = query.get(email);

    res.code(201).send(result);
  });
};

export default usersRoute;
