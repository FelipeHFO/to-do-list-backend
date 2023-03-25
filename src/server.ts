import cors from "cors";
import express from "express";
import { resolve } from "path";
import toDoListRouter from "./routes/toDoList";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/to-do-list", toDoListRouter);

app.get("/", (_, response) => {
  return response.status(200).sendFile(resolve("./src/pages/home.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
