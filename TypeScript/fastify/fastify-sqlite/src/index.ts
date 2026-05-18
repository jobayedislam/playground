import fastify from "fastify";
import autoload from "@fastify/autoload";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = fastify({ logger: true });

server.register(autoload, {
  dir: join(__dirname, "routes"),
});

server.get("/", async (req, res) => {
  res.code(200).send({ message: "OK" });
});

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
