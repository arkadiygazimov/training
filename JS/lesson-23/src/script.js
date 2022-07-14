//-------------------------- 1

function calcAmountRange() {

    let initialNumber = +prompt('Enter initial number');
    let finalNumber = +prompt('Enter final number');
    let sumNumbers = 0;

    for (i = initialNumber; i <= finalNumber; ++i) {

        sumNumbers = sumNumbers + i;
    }

    alert(sumNumbers);
}

//------------------- 2

function findCommonDivisor() {

    let dividendNumber1 = prompt('Enter dividend number 1');
    let dividendNumber2 = prompt('Enter dividend number 2');
    let strDivisor = 0;


    for (i = 1; i <= dividendNumber1 && i <= dividendNumber2; i++) {
        if (dividendNumber1 % i === 0 && dividendNumber2 % i === 0) {
            strDivisor += [i];
        }
    }

    let CommonDivisor = +strDivisor[strDivisor.length - 1];
    alert(CommonDivisor);
}

//---------------------- 3

function findAllDivisors() {

    let dividendNumber = prompt('Enter dividend number');
    let allDivisor = 0;


    for (i = 1; i <= dividendNumber; i++) {
        if (dividendNumber % i === 0) {
            allDivisor = i;
            alert(allDivisor);
        }
    }
}


//------------------------ 4

function determineDigitsNumber() {

    let currentNumber = prompt('Enter the number');

    if (isNaN(currentNumber)) {
        alert('Error, please enter again')
        determineDigitsNumber()
    } else {
        alert(currentNumber.length);
    }
}

//------------------------ 5

function findNumbers() {

    let positiveNumbers = 0;
    let negativeNumber = 0;
    let zeroNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;


    for ( i = 1; i <= 10; i++) {
        let addNumber = prompt('enter 10 numbers')

        if (addNumber == null) {
            alert('Cancel')
            break;
        }
        
        if (addNumber > 0) {
            positiveNumbers = positiveNumbers + 1;
        } else if (addNumber < 0) {
            negativeNumber = negativeNumber + 1;
        } else if (addNumber === 0) {
            zeroNumbers = zeroNumbers + 1;
        }

        if (addNumber % 2 === 0) {
            evenNumbers = evenNumbers + 1;
        } else if (addNumber % 2 !== 0) {
            oddNumbers = oddNumbers + 1;
        }
    }

    alert(`positive: ${positiveNumbers} ; negative: ${negativeNumber} ; zero ${zeroNumbers} ; even: ${evenNumbers} ; odd: ${oddNumbers}`);

}

//------------------ 6

function calcNumbers() {


    let addNumber1 = +prompt('Enter number 1');
    let multSymbol = prompt('Enter multiplier')
    let addNumber2 = +prompt('Enter number 2');
    let result = 0;

    switch (multSymbol) {
        case '+':
        result = addNumber1 + addNumber2;
        break;

        case '-':
            result = addNumber1 - addNumber2;
            break;

        case '/':
            result = addNumber1 / addNumber2;
            break;

        case '*':
            result = addNumber1 * addNumber2;
            break;

        default :
        result = result;
    }

    if (isNaN(addNumber1) || isNaN(addNumber2)) {
        alert('Error, please try again')
        calcNumbers();
    } else if (addNumber1 == null || addNumber2 == null || multSymbol == null) {
        alert('cancel!')
    } else {
        alert(result);
        calcNumbers();
    }
}

//------------------------ 7

function moveNumbers() {

    let startNumber = prompt('Enter a number');
    let movedNumber = +prompt('How much to move');

    if (startNumber.length < movedNumber || isNaN(startNumber) || startNumber <= 0) {
        alert('Error, pease try again!');
        moveNumbers();
    } else {
        let arr = startNumber.split('').join('');
        let arr2 = arr + arr.slice(0, movedNumber);
        let arr3 = arr2.split('');
        arr3.splice(0,movedNumber);
        let arr4 = +arr3.join('');

        alert(arr4);
    }
}

//---------------------- 8

function getDayOfWeek() {

    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

for (i = 0;; i++) {
  index = i % week.length;
  let infinityWeek = prompt('Days of week. Do you want to continue?', week[index]);
  if (infinityWeek == null) {
    alert('The End!')
    break;
  }

}
}