function isPrime(num) {
    for(let i = 2; i <= num/2; i ++) {
       if (num % i == 0)
           return false; // not prime as a factor is found 
    }
    return true;  // prime number    
}

console.log(isPrime(11), isPrime(1000))
