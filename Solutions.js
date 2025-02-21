
// 1.	Print  triangle - and allow user to set height of it in. Like in the following case it’s 4
                                                 
//                                                              *
//                                                             ***
//                                                            *****
//                                                           *******

Solution-1=>

function printTriangle(height) {

    for (let i = 0; i < height; i++)
 {
        let spaces = '';
        for (let j = 0; j < height - i - 1; j++) {
            spaces += ' ';
        }

        let stars = '';
        for (let k = 0; k < 2 * i + 1; k++) {
            stars += '*';
        }

        console.log(spaces + stars);

    }
}

printTriangle(height);




// 2.	Find valid date (MMDDYYYY) from string. 

// For example :-

//  Hdjsh asd2324234jghjsd hjsdg sdhk  12212021 idf32432 32423 d34234jh dfh 

Solution-2     
                           
  function findValidDate(str) {
    
    const datePattern = /\b(\d{2})(\d{2})(\d{4})\b/g;
    let match;
    const validDates = [];

    while ((match = datePattern.exec(str)) !== null) {
        const month = parseInt(match[1], 10);
        const day = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);

        if (isValidDate(month, day, year)) {
            validDates.push(`${match[1]}${match[2]}${match[3]}`);
        }
    }

    return validDates;
}

function isValidDate(month, day, year) {
    if (month < 1 || month > 12) {
        return false;
    }

  
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }

    
    if (year < 1000 || year > 9999) {
        return false;
    }

    return true;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const inputStr = "Hdjsh asd2324234jghjsd hjsdg sdhk  12212021 idf32432 32423 d34234jh dfh";
const validDates = findValidDate(inputStr);
console.log("Valid dates found:", validDates);

                             



