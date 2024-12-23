import { Pool } from "@joshbetz/memcached";

class MyMemcachedWrapper {
  constructor(private readonly client: Pool) {
    this.client.on("error", (error) => {
      console.log("I am the listener");
      this.throwOnError(error);
    });
  }

  throwOnError(error: Error) {
    console.log("I am the throwOnError");
    throw new Error(`The following error occurred: ${error.message}`);
  }

  myWrappedGet(key: string) {
    return this.client.get(key);
  }
}

try {
  const client = new Pool(11211, "localhost");
  const myMemcachedWrapper = new MyMemcachedWrapper(client);

  const cached = await myMemcachedWrapper.myWrappedGet("myKey");

  console.log("I am the cached value: ", cached);
  process.exit(0);
} catch (e) {
  console.error("I am the catch: ", e);
  process.exit(1);
}
