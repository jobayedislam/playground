import Fastify from "fastify";
import { Task } from "./types.js";

const fastify = Fastify({
  logger: true,
});
const tasks: Task[] = [];

fastify.get("/", async (request, response) => {
  return { message: "Hello World" };
});

fastify.get("/tasks", async (request, respose) => {
  return tasks;
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
