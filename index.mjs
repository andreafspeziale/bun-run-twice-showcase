import { Pool } from "@joshbetz/memcached";

class MyMemcachedWrapper {
  constructor(client) {
    this.client = client;

    this.client.on("error", (error) => {
      console.log("I am the listener");
      this.throwOnError(error);
    });
  }

  throwOnError(error) {
    console.log("I am the throwOnError");
    throw new Error(`The following error occurred: ${error.message}`);
  }

  myWrappedGet(key) {
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
