# Comandos utilizados neste projeto

- Adicionando as principais dependências
  `npm i -D typescript @types/node tsx tsup`

'tsx -> ?
'tsup -> é o interpretador que vamos utilizar, irá transformar o código typescript em javascript

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
