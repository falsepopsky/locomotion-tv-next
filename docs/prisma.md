# Prisma

1. Change the `schema.prisma` file to the following:

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

2. Delete the migrations folder.

3. In the root folder create a new .env file with the following content:

```
DATABASE_URL="file://loco.db"
```

4. Run the following scripts `npm run prisma-generate`, then `npm run prisma-push`.

5. Run prisma studio `npx prisma studio`, if you can see the schema and the data, you're good to go.
