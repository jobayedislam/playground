import fastify from "fastify";
import { todoRoutes } from "./routes/todoRoutes";
import { userRoutes } from "./routes/userRoutes";

const server = fastify({ logger: true });

server.get("/", async (req, res) => {
  res.code(200).send({ status: "OK" });
});

server.register(todoRoutes, { prefix: "/todos" });
server.register(userRoutes, { prefix: "/users" });

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
