import cors from "cors";
import express from "express";
import toDoListRouter from "./routes/toDoList";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/to-do-list", toDoListRouter);

app.get("/", (_, response) => {
  return response.status(200).send(
    `<!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API - To Do List</title>
    
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
    
          body {
            height: 100vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background-image: linear-gradient(
              45deg,
              rgb(0, 200, 255),
              rgb(254, 134, 59)
            );
          }
    
          header {
            text-align: center;
            padding: 50px 0;
          }
    
          h1,
          h2 {
            margin: 20px 0;
          }
    
          main {
            padding: 50px 15%;
          }
    
          section[id="description"] {
            border-radius: 25px;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 50px 50px 70px 50px;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Olá, bem vindo a API To Do List</h1>
          <h3>Meu nome é Felipe e este é um dos meus projetos</h3>
        </header>
    
        <main>
          <section id="description">
            <h2>Descrição</h2>
            <p>
              Este projeto de estudo é uma API integrada com um Banco de Dados
              Relacional Postgres.
            </p>
          </section>
        </main>
      </body>
    </html>`,
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
