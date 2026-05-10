import fastify, { FastifyInstance } from "fastify";
import { adminRoutes } from "./admin/adminRoutes";
import { usersRoute } from "./users/usersRoutes";

export const userGroup = async (server: FastifyInstance) => {
  server.register(adminRoutes, { prefix: "/admin" });
  server.register(usersRoute, { prefix: "/users" });
};
