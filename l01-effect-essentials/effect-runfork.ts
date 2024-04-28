import { Effect, Schedule, Console, Fiber } from "npm:effect";

const program = Effect.repeat(
  Console.log("running..."),
  Schedule.spaced("200 millis")
);
const fiber = Effect.runFork(program);
setTimeout(() => {
  Effect.runFork(Fiber.interrupt(fiber));
}, 500);
