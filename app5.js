function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbersInRange(start, end) {
    let primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

let startNumber = 1;
let endNumber = 100; // Meselenizə görə ədədlərin aralığını təyin edin
let primeNumbersInRange = findPrimeNumbersInRange(startNumber, endNumber);
console.log("Sadə ədədlər " + startNumber + " və " + endNumber + " arasında:");
console.log(primeNumbersInRange);
