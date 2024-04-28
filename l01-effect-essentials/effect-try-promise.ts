import { Effect } from "npm:effect";

const getTodo = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};

getTodo(1).then((todo) => console.log(todo));

const getTodoEffect = (id: number) =>
  Effect.tryPromise({
    try: () =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        (response) => response.json()
      ),
    catch: (unknownError) => new Error(`something went wrong: ${unknownError}`),
  });

const program = getTodoEffect(1);

Effect.runPromise(program);
