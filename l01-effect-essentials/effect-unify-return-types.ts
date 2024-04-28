import { Effect } from "npm:effect";

// const ugly = (a: number, b: number) =>
//   b === 0
//     ? Effect.fail(new Error("Cannot divide by zero"))
//     : Effect.succeed(a / b);

const nice = (a: number, b: number) =>
  Effect.suspend(() =>
    b === 0
      ? Effect.fail(new Error("Cannot divide by zero"))
      : Effect.succeed(a / b)
  );

const program = nice(10, 2);

Effect.runSync(program);
