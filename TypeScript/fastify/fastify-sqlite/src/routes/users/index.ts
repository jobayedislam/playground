import { FastifyInstance } from "fastify";
import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("./data.db");

const usersRoute = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached usersRoute" });
  });

  type GetUserParams = { id: number };
  server.get<{ Params: GetUserParams }>("/list/:id", async (req, res) => {
    const { id } = req.params;

    const query = db.prepare("SELECT * FROM users WHERE id = (?)");
    const result = query.get(id);

    res.code(200).send(result);
  });
};

export default usersRoute;
