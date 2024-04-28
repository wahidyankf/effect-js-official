import { Effect } from "npm:effect";
// @deno-types="npm:@types/node"
import * as NodeFS from "node:fs";
import { Buffer } from "node:buffer";

const readFile = (filename: string) =>
  Effect.async<Buffer, Error>((resume) => {
    NodeFS.readFile(filename, (error, data) => {
      if (error) {
        resume(Effect.fail(error));
      } else {
        resume(Effect.succeed(data));
      }
    });
  });

const program = readFile("todos.txt");

Effect.runCallback(program);
