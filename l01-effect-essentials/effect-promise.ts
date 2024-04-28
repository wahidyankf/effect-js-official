import { Effect } from "npm:effect";

const delay = (message: string) =>
  Effect.promise<string>(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(message);
          resolve(message);
        }, 2000);
      })
  );

const program = delay("Hello, World!");

Effect.runPromise(program);
