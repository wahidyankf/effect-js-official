import { Effect } from "npm:effect";

const result1 = Effect.runSyncExit(Effect.succeed(1));
console.log(result1); // { _id: "Exit", _tag: "Success", value: 1 }

const result2 = Effect.runSyncExit(Effect.fail("my error"));
console.log(result2);
// {
//   _id: "Exit",
//   _tag: "Failure",
//   cause: { _id: "Cause", _tag: "Fail", failure: "my error" }
// }
