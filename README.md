## Introduction
In this repository, we utilize a middleware to log all requests.
You can easily disable/enable it by modifying the `LOGGING` configuration in the `.env` file.

## Installation
```shell
npm install
```
or
```shell
yarn install
```

## Migrate
#### Set the database connection
Your database connection is configured in the `datasource` block in `prisma/schema.prisma` file. By default, it's set to `sqlite`, but you can change it to other supported databases in Prisma:

```groovy
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```
If you changed it, open up `.env` and adjust the `DATABASE_URL` too.
Then run this to migrate:
```shell
npx prisma migrate dev --name init
```
## Running the app

```shell
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

For view in browser use http://localhost:3000. You can change the port in `.env` with changing `APP_PORT`.