# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- I've moved `TRIVIAL_PARTITION_KEY` and `MAX_PARTITION_KEY_LENGTH` to outside the function `deterministicPartitionKey`. Since both are constants they won't be changed, so there's no reason to place them inside the function.
- I've created a function called `createPartitionKey` to wrap the code and give it a more meaningful name.
- Got away from the `if (event) ...` because there's no reason to nest two IF on that. It'll just either have a `partitionKey` prop or not. If there's no event, it should return `TRIVIAL_PARTITION_KEY` immediately.
- Splitted `candidate` into `candidate` and `partitionKey` to make thing cleaner and avoid multiple rewrite.
- Updated the `exports.deterministicPartitionKey` to receive the `createPartitionKey` function to keep things cleaner and easier to maintain.
