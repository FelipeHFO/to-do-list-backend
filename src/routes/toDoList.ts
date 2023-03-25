import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const toDoListRouter = express.Router();

toDoListRouter.get("/", async (_, response) => {
  try {
    const toDoList = await prisma.toDoList.findMany();

    return response.status(200).send({ toDoList });
  } catch (error) {
    return response
      .status(500)
      .send({ message: "Erro ao tentar buscar lista de tarefas..." });
  }
});

toDoListRouter.post("/", async (request, response) => {
  try {
    const { name, status, editable } = request.body;

    await prisma.toDoList.create({
      data: {
        name,
        status,
        editable,
      },
    });

    return response.status(201).send();
  } catch (error) {
    return response
      .status(500)
      .send({ message: "Erro ao criar uma nova tarefa..." });
  }
});

export default toDoListRouter;
