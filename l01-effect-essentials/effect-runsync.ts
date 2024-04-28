import { Effect } from "npm:effect";

const program = Effect.sync(() => {
  console.log("Hello, World!");
  return 1;
});

const result = Effect.runSync(program);

console.log(result);

// Effect.runSync(Effect.fail("my error")); // throws

// Effect.runSync(Effect.promise(() => Promise.resolve(1))); // throws
