import fastify from "fastify";

const server = fastify({ logger: true });

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
