import fastify from "fastify";
import { todoRoutes } from "./routes/todoRoutes";

const server = fastify({ logger: true });

server.get("/", async (req, res) => {
  res.code(200).send({ status: "OK" });
});

server.register(todoRoutes, { prefix: "/todos" });

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
