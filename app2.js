function isPrime(number) {
    // Əgər ədəd 1-dən kiçikdirsə və ya 2-dirsə sadə deyil
    if (number < 2) {
        return false;
    }
    // Əgər ədəd 2-yə bərabərdirsə sadədir
    if (number === 2) {
        return true;
    }
    // Əgər ədəd 2-yə bölməklə sadə deyilsə
    if (number % 2 === 0) {
        return false;
    }
    // Ədədin böyük hissəsini yoxlamaq üçün dövr
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Funksiyamızı test etmek üçün bir nümunə ədəd
let testNumber = 23;
if (isPrime(testNumber)) {
    console.log(testNumber + " sadədir.");
} else {
    console.log(testNumber + " mürəkkəbdir.");
}
