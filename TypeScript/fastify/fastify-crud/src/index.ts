import fastify from "fastify";
import { randomUUID } from "node:crypto";
import { Task } from "./types.js";

const server = fastify({ logger: true });
const tasks: Task[] = [];

for (let i = 1; i <= 5; i++) {
  tasks.push({
    id: randomUUID(),
    title: `Task ${i}`,
    completed: false,
    timestamp: `${Date.now()}`,
  });
}

server.get("/", async (req, res) => {
  res.code(200).send({ message: "OK" });
});

server.get("/tasks", async (req, res) => {
  res.code(200).send(tasks);
});

type CreateTaskBody = Pick<Task, "title">;

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
