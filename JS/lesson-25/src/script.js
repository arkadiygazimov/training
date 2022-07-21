//------------ 1 сравнить 2 числа

function compareNumbers() {

    function compareSomeNumbers() {

        const numberA = prompt('Enter number A');
        const numberB = prompt('Enter number B');

        let compare;

        if (isNaN(numberA) || isNaN(numberB) || numberA === null || numberB === null) {
            compare = NaN;
        } else if (numberA > numberB) {
            compare = 1;
        } else if (numberA < numberB) {
            compare = -1;
        } else {
            compare = 0;
        }

        return compare;
    }

    alert(compareSomeNumbers());
}

//------------ 2 найти факториал числа

function findFactorial() {

    function findSomeFactorial() {

        const number = prompt('Enter number')

        if (isNaN(number) || number < 0) {
            alert('Error, try again');
            findFactorial();
        } else {
            let factorial = 1;

            for ( let i = 1; i < number; i++) {
                factorial += factorial * i;
            }

            return factorial; 
        }
    }

    alert(`factorial is: ${findSomeFactorial()}`);
}

//------------ 3 соединить 3 числа в одно

function connectNumbers() {

    function connectSomeNumbers() {

        const numberA = +prompt('Enter number A');
        const numberB = +prompt('Enter number B');
        const numberC = +prompt('Enter number C');

        let fullNumber = '' + numberA + numberB + numberC;
        
        fullNumber = +fullNumber;

        return fullNumber;
    }

    alert(`Your number is: ${connectSomeNumbers()}`);
}

//--------------------- 4 найти площадь прямоугольника или квадрата

function findArea() {

    function findSomeArea() {

        const sideA = +prompt('Enter side A');
        const sideB = +prompt('Enter side B');

        let area

        if (sideA <= 0 || sideB < 0) {
            alert('Error');
        } else if (sideB === 0) {
            area = Math.pow(sideA, 2);
        } else {
            area = sideA * sideB;
        }

        return area;
        
    }

    alert(`Area is: ${findSomeArea()}`);
}

//----------------- 5 проверить на совершенное число

function checkPerfectNumber() {

    const number = +prompt('Enter number');
    let divider = 0;
    
    for (let i = 0; i < number; i++) {
        
        if (number % i === 0) {
            divider += i;
        } 
    }
    
    if(divider === number && divider !== 0)
    {
    alert("It is a perfect number.");
    } 
    else
    {
    alert("It is not a perfect number.");
    }
}

//------------------- 6 найти все совершенные числа в диапазоне

function findPerfectNumber() {

    const start = +prompt('Enter start number');
    const end = +prompt('Enter end number');
    
    for (let i = start - 1; i < end; i++) {

        let divider = 0;

        for (let j = 0; j < i; j++) {

            if (i % j === 0) {
                divider += j;
            }
        }

        if (i === divider && divider !== 0) {
            alert(i);
        }
    }
}

//--------------------- 7, 8 Вывести на экран время затем показать его в секундах

function showTime() {

    const hours = document.getElementsByClassName("input--hours")[0].value;
    const minutes = document.getElementsByClassName("input--minutes")[0].value;
    const seconds = document.getElementsByClassName("input--seconds")[0].value;

    let date = new Date();
    
    date.setHours(hours, minutes,seconds);

    let timeInSec = +seconds + minutes * 60 + hours * 3600;

    alert(date);

    alert(`${timeInSec} seconds have passed since the beginning of the day`);
}

//----------------------- 9 запросить время в секундах, а вывсти в дате.

function convertTime() {

    const timeInSeconds = document.getElementsByClassName("input--full-seconds")[0].value;
    const timeInMinutes = timeInSeconds / 60;
    const timeInHours = timeInSeconds / 3600;

    const timePassedHours = Math.trunc(timeInHours);
    const timePassedMinutes = Math.trunc(timeInMinutes - Math.trunc(timeInHours) * 60);
    const timePassedSeconds = timeInSeconds - timePassedHours * 3600 - timePassedMinutes * 60;

    let date = new Date();
    
    date.setHours(timePassedHours, timePassedMinutes, timePassedSeconds);

    alert(date);
}

//--------------------- 10 сравнить 2 даты

function compareDates() {

    const firstDateSeconds = document.getElementsByClassName("input--first-seconds")[0].value;
    const firstDateMinutes = document.getElementsByClassName("input--first-minutes")[0].value;
    const firstDateHours = document.getElementsByClassName("input--first-hours")[0].value;

    const secondDateSeconds = document.getElementsByClassName("input--second-seconds")[0].value;
    const secondDateMinutes = document.getElementsByClassName("input--second-minutes")[0].value;
    const secondDateHours = document.getElementsByClassName("input--second-hours")[0].value;

    let firstTimeInSec = +firstDateSeconds + firstDateMinutes * 60 + firstDateHours * 3600;
    let secondTimeInSec = +secondDateSeconds + secondDateMinutes * 60 + secondDateHours * 3600;
    alert(firstTimeInSec);
    alert(secondTimeInSec);

    let difference = firstTimeInSec - secondTimeInSec;

    const timeInSeconds = difference;
    alert(difference);
    const timeInMinutes = timeInSeconds / 60;
    const timeInHours = timeInSeconds / 3600;

    const timePassedHours = Math.trunc(timeInHours);
    const timePassedMinutes = Math.trunc(timeInMinutes - Math.trunc(timeInHours) * 60);
    const timePassedSeconds = timeInSeconds - timePassedHours * 3600 - timePassedMinutes * 60;

    let date = new Date();
    
    date.setHours(timePassedHours, timePassedMinutes, timePassedSeconds);

    alert(date);
}