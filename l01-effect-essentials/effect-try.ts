import { Effect } from "npm:effect";

const parse = (input: string) =>
  Effect.try({
    try: () => JSON.parse(input),
    catch: (unknownError) => new Error(`something went wrong: ${unknownError}`),
  });

const program = parse("");

Effect.runSync(program);
