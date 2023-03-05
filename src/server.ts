import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.get("/todolist", async () => {
  const toDoList = await prisma.toDoList.findMany();

  return { toDoList };
});

app.post("/todolist", async (request, reply) => {
  const { name, status, editable } = request.body;

  await prisma.toDoList.create({
    data: {
      name,
      status,
      editable,
    },
  });

  return reply.status(201).send();
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 5000,
  })
  .then(() => {
    console.log("Servidor rodando...");
  });
