import Fastify from "fastify";
import { Task } from "./types.js";

const fastify = Fastify({
  logger: true,
});
const tasks: Task[] = [];

fastify.get("/", async (request, response) => {
  return { message: "Hello World" };
});

fastify.get("/tasks", async (request, response) => {
  return tasks;
});

type CreateTaskBody = Pick<Task, "title">;

fastify.post<{ Body: CreateTaskBody }>("/tasks", async (request, response) => {
  const { title } = request.body;

  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  return newTask;
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
