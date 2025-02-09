Bad comments
Novices tend to use comments to explain “what is going on in the code”. Like this:

// This code will do this thing (...) and that thing (...)
// ...and who knows what else...
very;
complex;
code;
But in good code, the amount of such “explanatory” comments should be minimal. Seriously, the code should be easy to understand without them.

There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.

Recipe: factor out functions
Sometimes it’s beneficial to replace a code piece with a function, like here:

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
The better variant, with a factored out function isPrime:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}