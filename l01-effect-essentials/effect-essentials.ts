import { Console, Effect } from "npm:effect";

const divide = (a: number, b: number): Effect.Effect<number, Error> =>
  b === 0
    ? Effect.fail(new Error("Cannot divide by zero"))
    : Effect.succeed(a / b);

const program = Console.log(divide(10, 2));

Effect.runSync(program);
