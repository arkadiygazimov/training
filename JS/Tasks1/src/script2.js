//------------------- 1 Даны три вещественных числа a, b, c. 

function checkInequality() {

    let numberA = +prompt('Enter number A');
    let numberB = +prompt('Enter number B');
    let numberC = +prompt('Enter number C');

    if (isNaN(numberA) || isNaN(numberB) || isNaN(numberC)) {
        alert('Error, please try again!');
        checkInequality();
    } else if (numberA < numberB && numberB < numberC) {
        alert(`A < B < C is: ${true}`);
    } else {
        alert(`A < B < C is: ${false}`);
    }
}

//------------------ 2 является ли число а делителем числа b

function checkDivisor() {

    let numberA = +prompt('Enter number A');
    let numberB = +prompt('Enter number B');

    if (isNaN(numberA) || isNaN(numberB)) {
        alert('Error, please try again!');
        checkDivisor();
    } else if (numberA % numberB === 0 || numberB % numberA === 0) {
        alert('Yes, one of the numbers is a divisor of another')
    } else {
        alert('No, neither number is a divisor of the other');
    }
}

//------------------ 13 Дано четырехзначное число. Определить: входят ли в него цифры 2 или 7

function findNumbers() {

    let number = prompt('Enter a four-digit number');
    let first = 2;
    let second = 7;

    let isFirstExist = false;
    let isSecondExist = false;

    let i = 0;

    if (number.length != 4 || isNaN(number)) {
        alert('Error, enter a four-digit number')
        findNumbers();
    } else {

        for ( i = 0; i < number.length; i++) {
            if (number[i] == first) {
            isFirstExist = true;
            }

            if (number[i] == second) {
            isSecondExist = true;
            }
        }

        alert(`${first} is included the number of ${number}: ${isFirstExist}`);
        alert(`${second} is included the number of ${number}: ${isSecondExist}`);
    }
}

//------------------- 14 задача про палиндром решение через циклы

function findPalindrom() {

    let number = prompt('Enter a four-digit number');

    if (number.length != 4 || isNaN(number) || number <= 0) {
        alert('Error, enter a four-digit number')
        findPalindrom();
    } else {

        function palindrome(number) {
            let left = 0;
            let right = number.length - 1;
        
            while (left < right) {
            if (number[left] !== number[right]) {
                return 'This number is not palindrom!!';
            }
            left++;
            right--;
            }
        
            return 'This number is palindrom!!';
        }
        
        alert(palindrome(number));
    }
}

//---------------- 15 верно ли, что это число содержит ровно три одинаковые цифры с учетом четырех цифр.

function findSameNumbers() {

    const number = prompt('Enter a four-digit number');

    if (number.length != 4 || isNaN(number) || number <= 0) {
        alert('Error, enter a four-digit number')
        findSameNumbers();
    } else {

        const numberThousands = parseInt(number / 1000);
        const numberHundreds = parseInt(number / 100) % 10;
        const numberDozens = parseInt(number / 10) % 10;
        const numberUnits = number % 10;

        if (numberUnits === numberDozens && numberDozens === numberHundreds && numberUnits !== numberThousands) {
            alert(true);
        } else if (numberDozens === numberHundreds && numberHundreds === numberThousands && numberUnits !== numberThousands) {
            alert(true);
        } else if (numberUnits === numberHundreds && numberUnits === numberThousands && numberUnits !== numberDozens) {
            alert(true);
        } else if (numberUnits === numberDozens && numberUnits === numberThousands && numberUnits !== numberHundreds) {
            alert(true);
        } else {
            alert(false);
        }
    }
}

//------------------- 17 сумма его первых трех цифр  равна сумме его последних трех цифр

function findLuckyNumber() {

    let number = prompt('Enter a six-digit number');

    if (number.length != 6 || isNaN(number) || number <= 0) {
        alert('Error, enter a four-digit number')
        findLuckyNumber();
    } else {

        function luckyNumber(number) {
            let left = 0;
            let right = number.length - 3;
        
            while (left < 2) {
            if (number[left] !== number[right]) {
                return 'This number is not Lucky!!';
            }
            left++;
            right++;
            }
        
            return 'This number is Lucky!!';
        }
        
        alert(luckyNumber(number));
    }
}

//------------------- 17 сумма его первых трех цифр  равна сумме его последних трех цифр

function getFootballResult() {

    const points = +prompt('Enter the number of points received by the team: 0, 1 or 3');

    if (points < 0 || points === 2 || points > 3) {
        alert('Error, please ad 0, 1 or 3');
        getFootballResult();
    } else {
        let strResult = 0;

        function footballResult(strResult) {

            switch (points) {
                case 3:
                strResult = 'Win!';
                break;

                case 1:
                strResult = 'Draw';
                break;

                case 0:
                strResult = 'Loose';
                break;
            }
            return strResult;
        }
        
        alert(footballResult(strResult));
    }
}

//------------------- 25 Найти разрядность натурального числа

function findMaxNumberPosition() {

    const number = prompt('Enter the number');
    let arr = ('' + number).split('').map(Number);
    let arrMax = Math.max.apply(null, arr);

    if (isNaN(number) || number <= 0) {
        alert('Error, please try again');
        findMaxNumberPosition();
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arrMax) {
                let result = arr.length - i;

                alert(result);
            }
        }
    }
}

//--- 26 Дано натуральных числа А и B. Найти сумму чисел, каждое из которых меньше или равно В с помощью которых можно представить А 

function findSumNumbers() {

    const numberA = +prompt('Enter the number');
    const numberB = +prompt('Enter the number');

    if (numberA <= 0 || numberB <= 0 || numberA <= numberB) {
        alert('Error, please try again');
        findSumNumbers();
    } else {

        const divider = Math.trunc(numberA / numberB);
        const remainder = numberA % numberB;

        let result = (numberB + '+').repeat(divider);

        result = result + remainder;

        alert(result);
    }

}

//------ 27 Дано натуральное число. Определить являются ли его все цифры разными


function findDifferentDigits() {

    const number = prompt('Enter natural number');

    if (isNaN(number)) {
        alert('Error, please try again');
        findDifferentDigits();
    } else if (number === null) {
        alert('Cancel');
    } else {

        const arr = ('' + number).split('').map(Number);
        const variousNumbers = arr.sort();
        let sameNumbers = 0;

        for (let i = 0; i < variousNumbers.length; i++) {
                if (variousNumbers[i] === variousNumbers[i+1]) {
                    sameNumbers = false;
                    break;
                } else {
                    continue;
                }
        }

        const checkNumbers = false;

        if (checkNumbers === sameNumbers) {
            alert('this number has the same digits!!');
        } else {
            alert('all digits are different!!');
        }
    }
}