import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/todolist", async (request, response) => {
  const toDoList = await prisma.toDoList.findMany();

  return response.status(200).send({ toDoList });
});

app.post("/todolist", async (req, response) => {
  const { name, status, editable } = req.body;

  await prisma.toDoList.create({
    data: {
      name,
      status,
      editable,
    },
  });

  return response.status(201).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
