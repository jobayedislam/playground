import { FastifyInstance } from "fastify";

const tasksRoute = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached taskRoute." });
  });
};

export default tasksRoute;
