import { Effect } from "npm:effect";

const log = (message: string) => Effect.sync(() => console.log(message));

const program = log("Hello, World!");

Effect.runSync(program);
