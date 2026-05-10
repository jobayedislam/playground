import { FastifyInstance } from "fastify";

export const adminRoutes = async (server: FastifyInstance) => {
  server.get("/", async (req, res) => {
    res.code(200).send({ message: "Successfully reached adminRoutes." });
  });
};
