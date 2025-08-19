// Common Mathematical Problems Solutions

// Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
console.log(isPrime(1)); // false
console.log(isPrime(0)); // false
console.log(isPrime(-5)); // false
console.log(isPrime(29)); // true
console.log(isPrime(97)); // true
console.log(isPrime(2)); // true
console.log(isPrime(100)); // false
