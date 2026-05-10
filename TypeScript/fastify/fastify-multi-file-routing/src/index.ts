import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/", async (req, res) => {
  res.code(200).send({ status: "OK" });
});

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
