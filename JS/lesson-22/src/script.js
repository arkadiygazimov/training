//---------- 1 --------------//

function whatIsAge() {

    let userAge = prompt('What is your age?');

    if (userAge < 12 && userAge > 0) {
        alert('you are a child');
    } else if (userAge >= 12 && userAge < 18) {
        alert('you are a teenager');
    } else if (userAge >=18 && userAge <= 60) {
        alert('you are an adult');
    } else if (userAge > 60 && userAge <= 150) {
        alert('you are a pensioner');
    } else {
        alert('Error, please enter correct value.');
        whatIsAge();
    }
}

whatIsAge();

//------------ 2 -------------//

function convertToSymbols() {

    let convertNumber = prompt('Enter a number from 0 to 9');

    if (convertNumber == 0) {
        alert(')');
    } else if (convertNumber == 1) {
        alert('!');
    } else if (convertNumber == 2) {
        alert('@');
    } else if (convertNumber == 3) {
        alert('#');
    } else if (convertNumber == 4) {
        alert('$');
    } else if (convertNumber == 5) {
        alert('%');
    } else if (convertNumber == 6) {
        alert('^');
    } else if (convertNumber == 7) {
        alert('&');
    } else if (convertNumber == 8) {
        alert('*');
    } else if (convertNumber == 9) {
        alert('(');
    } else {
        alert('incorrect value');
        convertToSymbols();
    }
}

convertToSymbols();

//------------ 3 --------------//

function sameNumbers() {

    let number = prompt('Enter a three-digit number');
    let numberUnits = parseInt(number / 100);
    let numberDozens = parseInt(number / 10) % 10;
    let numberHundreds = number % 10;

    if (number.length != 3 || isNaN(number)) {
        alert('Error, enter a three-digit number')
        sameNumbers();
    } else if (numberUnits === numberDozens || numberUnits === numberHundreds || numberHundreds === numberDozens) {
        alert(true);
    } else {
        alert(false);
        sameNumbers();
    }
}

sameNumbers();

//------------- 4 ----------------//

function enterLeapYear() {

    let leapYear = prompt('enter leap year');

    if (isNaN(leapYear)) {
        alert ('Error!');
    } else if (leapYear % 100 > 0 && (leapYear % 400 === 0 || leapYear % 4 === 0)) {
        alert('This year is leap!');
    } else {
        alert('This year is not leap!');
        enterLeapYear();
    }

}

enterLeapYear();

//------------- 5 -----------------//

function searchPalindrom() {

    let numPalindrom = prompt('enter a five-digit number');

    if (numPalindrom.length != 5 || isNaN(numPalindrom)) {
        alert('Error!');
        searchPalindrom();
    } else if (numPalindrom === numPalindrom.split('').reverse().join('')) {
        alert(true);
    } else {
        alert(false);
        searchPalindrom();
    }
}

searchPalindrom();

//------------ 6 -----------------//

function converter() {

    let valueInUSD = prompt('Enter amount in USD');
    let currencyType = prompt('Select the currency to which you want to transfer EUR, UAH, AZN');

    switch (currencyType) {
        case 'EUR':
        alert(valueInUSD * 0.99);
        break;

        case 'UAH':
            alert(valueInUSD * 29.50);
            break;

        case 'AZN':
            alert(valueInUSD * 1.7);
            break;

        default:
            alert('Error!');
            converter();
    }

    if (valueInUSD < 0 || isNaN(valueInUSD)) {
        alert('Error!');
        converter();
    }
}

converter();

//------------- 7 ----------------//

function whatDiscount() {

    let purchaseAmount = prompt('Enter purchase amount');

    if (purchaseAmount.length < 0 || isNaN(purchaseAmount)) {
        alert('Error!');
        whatDiscount();
    } else if (purchaseAmount < 200) {
        alert('Your discount is 0');
    } else if (purchaseAmount >= 200 && purchaseAmount < 300) {
        alert(`Your discount is ${purchaseAmount * 0.03}`);
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        alert(`Your discount is ${purchaseAmount * 0.05}`);
    } else {
        alert(`Your discount is ${purchaseAmount * 0.07}`);
    }
}

whatDiscount();

//------------- 8 --------------------//

function circumInSquare() {

    let circumference = prompt('Enter circumference');
    let squarePerimeter = prompt('Enter perimeter of the square');

    if (circumference.length < 0 || isNaN(circumference) || squarePerimeter.length < 0 || isNaN(squarePerimeter)) {
        alert('Error!');
        circumInSquare();
    } else if (circumference <= squarePerimeter * Math.PI / 4) {
        alert(true);
    } else {
        alert(false);
        circumInSquare();
    }
}

circumInSquare();

//--------------- 9 -----------------------//

function mathExam() {

    let additionNumbers = prompt('2 + 2? a = 4; b = 5; c = 6');
    let subtractionNumbers = prompt('4 - 2? a = 5; b = 2; c = 10'); 
    let multiplicationNumbers = prompt('3 * 2? a = 2; b = 4; c = 6');
    let result = 0;

    switch (additionNumbers) {
        case 'a':
        result = result + 2;
        break;

        default :
        result = result;
    }

    switch (subtractionNumbers) {
        case 'b':
        result = result + 2;
        break;

        default :
        result = result;
    }

    switch (multiplicationNumbers) {
        case 'c':
        result = result + 2;
        break;

        default :
        result = result;
    }

    alert(`Your result is ${result}`);
}

mathExam();

//------------- 10 ------------//

function tomorrow() {

    let addDay = prompt('Enter a day');
    let addMounth = prompt('Enter a mounth');
    let addYear = prompt('Enter a year');

    if (addDay <= 0 || addDay > 31 || isNaN(addDay)) {
        alert('Error, day is incorrect!')
        tomorrow();
    }

    if (addMounth <= 0 || addMounth > 12 || isNaN(addMounth)) {
        alert('Error, mounth is incorrect!')
        tomorrow();
    }

    if (isNaN(addYear)) {
        alert('Error, year is incorrect!')
        tomorrow();
    }

    addDay = + addDay + 1;
    addMounth = + addMounth - 1;
    let currentDate = new Date(addYear, addMounth, addDay);

    alert(currentDate);
}

tomorrow();