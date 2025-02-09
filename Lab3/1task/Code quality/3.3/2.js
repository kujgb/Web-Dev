Good comments
So, explanatory comments are usually bad. Which comments are good?

Describe the architecture
Provide a high-level overview of components, how they interact, what’s the control flow in various situations… In short – the bird’s eye view of the code. There’s a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.
Document function parameters and usage
There’s a special syntax JSDoc to document a function: usage, parameters, returned value.
For instance:

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}
