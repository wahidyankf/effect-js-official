import { Effect } from "npm:effect";

let i = 0;

const bad = Effect.succeed(i++);

const good = Effect.suspend(() => Effect.succeed(i++));

console.log("bad");

console.log(Effect.runSync(bad)); // Output: 0
console.log(Effect.runSync(bad)); // Output: 0

console.log(i); // 1

console.log("good");

console.log(Effect.runSync(good)); // Output: 1
console.log(Effect.runSync(good)); // Output: 2

console.log(i); // 3
