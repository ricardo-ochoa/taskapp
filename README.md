This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


Para correr localmente es necesaria la base de datos

```
docker-compose up -d

```
* El -d, significa __detached__

* MongoDB URL Local:

```
mongodb://localhost:27017/entiesdb

```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de datos con información de pruebas

Llamar a :
```http://localhost:3000/api/seed```