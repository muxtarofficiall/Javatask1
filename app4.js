function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number && number !== 0;
}

function findPerfectNumbersInRange(start, end) {
    let perfectNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

let startNumber = 1;
let endNumber = 100; // Meselenizə görə ədədlərin aralığını təyin edin
let perfectNumbersInRange = findPerfectNumbersInRange(startNumber, endNumber);
console.log("Mükəmməl ədədlər " + startNumber + " və " + endNumber + " arasında:");
console.log(perfectNumbersInRange);
