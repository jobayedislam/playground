import { FastifyInstance } from "fastify";

const usersRoute = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached usersRoute" });
  });
};

export default usersRoute;
