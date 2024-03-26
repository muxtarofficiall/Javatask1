function findNumbersEndingWith7(start, end) {
    let numbersEndingWith7 = [];

    for (let i = start; i <= end; i++) {
        if (i % 10 === 7) {
            numbersEndingWith7.push(i);
        }
    }

    return numbersEndingWith7;
}

// Test üçün nümunə ədədlər
let startNumber = 10;
let endNumber = 100; // Daxil olunan 2 ədəd arasında olan aralığı təyin edin

let numbersEndingWith7 = findNumbersEndingWith7(startNumber, endNumber);
console.log("Sonu 7 ilə bitən ədədlər " + startNumber + " və " + endNumber + " arasında:");
console.log(numbersEndingWith7);
