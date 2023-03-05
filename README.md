# To Do List Backend

API feita em NodeJS, utilizando o framework Fastify em conjunto do TypeScript ORM Prisma e o Banco de Dados Postgres.
Ela serve como um simples CRUD (Create, Read, Update, Delete) para a minha aplicação (To Do List)[https://to-do-list-felipehfo.vercel.app/] hospedada pela (Vercel)[https://vercel.com/dashboard].
Esta aplicação está hospedada pela (Render)[https://dashboard.render.com/], junto com o Banco de Dados disponibilizados por ela.

# Comandos utilizados neste projeto

- Adicionando as principais dependências
  `npm i -D typescript @types/node tsx tsup`

- tsx -> biblioteca que faz a execução do typescript
- tsup -> é o interpretador que vamos utilizar, irá transformar o código typescript em javascript

- Cria o arquivo tsconfig.json
  `npx tsc --init`

- Adicionado o fastify
  `npm i fastify`

- Adicionando o prisma e o prisma cli
  `npm i prisma -D`
  `npm i @prisma/client`

- Cria o arquivo schema.prisma
  `npx prisma init`

- Cria as migrations do prisma
  `npx prisma migrate dev`

- Abrir interface do Prisma
  `npx prisma studio`
