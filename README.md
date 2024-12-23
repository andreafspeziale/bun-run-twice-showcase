# Bun run twice showcase

To install dependencies:

```bash
$ bun install
```

To run:

> avoid `docker compose up -d` in order to see the script fail

```bash
$ node index.mjs
$ bun index.ts
```

## Node.js output

![nodejs-output](./assets/Screenshot%202024-12-23%20alle%2014.17.04.png)

## Bun output

It seems the script is run twice and I wont expect (`index.ts`) L27 printed out.

![bun-output](./assets/Screenshot%202024-12-23%20alle%2014.17.39.png)
