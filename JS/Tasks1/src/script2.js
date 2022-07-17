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