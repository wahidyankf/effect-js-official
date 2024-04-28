import { Effect, Console } from "npm:effect";

const program = Console.log("Hello, World!");

Effect.runSync(program);
