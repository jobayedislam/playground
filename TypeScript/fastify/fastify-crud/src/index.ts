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
    timestamp: Date.now().toString(),
  });
}

const getTaskIndex = (arr: Task[], id: string): number => {
  return arr.findIndex((item) => item.id === id);
};

server.get("/", async (req, res) => {
  res.code(200).send({ message: "OK" });
});

server.get("/tasks", async (req, res) => {
  res.code(200).send(tasks);
});

type CreateTaskBody = Pick<Task, "title">;

server.post<{ Body: CreateTaskBody }>("/tasks", async (req, res) => {
  const { title } = req.body;

  const newTask = {
    id: randomUUID(),
    title,
    completed: false,
    timestamp: Date.now().toString(),
  };

  tasks.push(newTask);
  res.code(201).send(newTask);
});

type DeleteTaskParams = Pick<Task, "id">;

server.delete<{ Params: DeleteTaskParams }>(
  "/tasks/delete/:id",
  async (req, res) => {
    const { id } = req.params;
    let taskIndex = getTaskIndex(tasks, id);

    if (taskIndex >= 0) {
      tasks.splice(taskIndex, 1);
      res.code(200).send({ message: "Deleted" });
    } else {
      res.code(404).send({ message: "Not found" });
    }
  },
);

type UpdateTaskParams = Pick<Task, "id">;
type UpdateTaskBody = Pick<Task, "title" | "completed">;

server.put<{ Params: UpdateTaskParams; Body: UpdateTaskBody }>(
  "/tasks/update/:id",
  async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    let taskIndex = getTaskIndex(tasks, id);

    if (taskIndex >= 0) {
      if (title) tasks[taskIndex].title = title;
      if (completed) tasks[taskIndex].completed = completed;

      res.code(200).send(tasks[taskIndex]);
    } else {
      res.code(404).send({ message: "Task not found" });
    }
  },
);

try {
  server.listen({ port: 3000 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
