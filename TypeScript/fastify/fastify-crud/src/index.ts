import fastify from "fastify";
import { Task } from "./types.js";

const server = fastify({ logger: true });
const tasks: Task[] = [];

server.get("/", async (req, res) => {
  res.code(200).send({ message: "OK" });
});

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
