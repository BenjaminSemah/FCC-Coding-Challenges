// 13/21 Sum All Primes

function sumPrimes(num) {
  
  function checkPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0)
      return false;
    }
    return true;
  }

  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
        sum += i;
    }
  }
  return sum;
}

sumPrimes(10) // 17;
