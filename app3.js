function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number && number !== 0;
}

// Test üçün bir nümunə ədəd
let testNumber = 101;
if (isPerfectNumber(testNumber)) {
    console.log(testNumber + " mükəmməl ədəddir.");
} else {
    console.log(testNumber + " mükəmməl ədəd deyil.");
}
