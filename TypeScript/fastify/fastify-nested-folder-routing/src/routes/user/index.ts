import fastify, { FastifyInstance } from "fastify";
import { adminRoutes } from "./admin/adminRoutes";

export const userGroup = async (server: FastifyInstance) => {
  server.register(adminRoutes, { prefix: "/admin" });
};
