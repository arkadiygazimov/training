//--------------------- 1 среднее арифметическое

function findAverageNumbers() {

let firstNumber = +prompt('Enter first number');
let secondNumber = +prompt('Enter second number');
let arithmeticMean = (firstNumber + secondNumber) / 2;
let geometricMean = Math.sqrt(firstNumber * secondNumber);

alert(`ArithmeticMean is: ${arithmeticMean}`);
alert(`GeometricMean is: ${geometricMean}`);

}

//--------------------------- 2 плотность материала 

function findBodyDensity() {

    let bodyVolume = +prompt('Enter body volume');
    let bodyMass = +prompt('Enter body mass');
    let bodyDensity = bodyMass * bodyVolume;

    if (bodyMass < 0 || bodyVolume < 0) {
        alert('Error, please try again!');
        findBodyDensity();
    } else {
        alert(`Body Density is: ${bodyDensity}`);
    }  
}

//----------------------- 3 плотность населения

function findPopulationDensity() {

    let inhabitantsNumber = +prompt('Enter number of inhabitants');
    let territoryArea = +prompt('Enter area of the territory');
    let populationDensity = inhabitantsNumber / territoryArea;

    if (inhabitantsNumber < 0 || territoryArea < 0) {
        alert('Error, please try again!');
        findPopulationDensity();
    } else {
        alert(`Population Density is: ${populationDensity}`);
    }    
}

//----------------------- 4 Составить программу решения линейного уравнения

function calcLinearEquation() {

    let firstCoefficient = +prompt('ax + b = 0; please enter a');
    let secondCoefficient = +prompt('ax + b = 0; please enter b');
    let linearEquation = - (secondCoefficient / firstCoefficient);
    
    alert(`x = ${linearEquation}`);
    
}

//------------------------- 5 Найти гипотенузу

function findHypotenuse() {

    let firstCathetus = +prompt('enter one cathetus length of a right triangle');
    let secondCathetus = +prompt('enter another cathetus length of a right triangle');
    let hypotenuse = Math.sqrt(Math.pow(firstCathetus, 2) + Math.pow(secondCathetus, 2));

    if (firstCathetus <= 0 || secondCathetus <= 0) {
        alert('Error, please try again!');
        findHypotenuse();
    } else {
        alert(`hypotenuse = ${hypotenuse}`);
    }
}

//------------------------ 6 Найти площадь кольца

function findRingArea() {

    let outerRadius = +prompt('enter outer radius of the ring');
    let innerRadius = +prompt('enter ring inner radius');
    let ringArea = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));

    if (outerRadius <= innerRadius) {
        alert('Error, please try again!');
        findRingArea();
    } else {
        alert(`Ring Area = ${ringArea}`);
    }    
}

//------------------------- 7 Даны катеты прямоугольного треугольника. Найти его периметр

function findTrianglePerimetr() {

    let firstCathetus = +prompt('enter one cathetus length of a right triangle');
    let secondCathetus = +prompt('enter another cathetus length of a right triangle');
    let hypotenuse = Math.sqrt(Math.pow(firstCathetus, 2) + Math.pow(secondCathetus, 2));
    let perimeter = firstCathetus + secondCathetus + hypotenuse;

    if (firstCathetus <= 0 || secondCathetus <= 0) {
        alert('Error, please try again!');
        findTrianglePerimetr();
    } else {
        alert(`Perimetr = ${perimeter}`);
    }    
}

// ------------------------- 8 Даны основания и высота равнобедренной трапеции. Найти ее периметр

function findTrapezoidPerimetr() {

    let firstTrapezoidBase = +prompt('enter First Trapezoid Base');
    let secondTrapezoidBase = +prompt('enter Second Trapezoid Base');
    let trapezoidHeight = +prompt('enter Trapezoid Height');
    let trapezoidPerimeter = ((firstTrapezoidBase + secondTrapezoidBase) / 2) * trapezoidHeight;

    if (firstTrapezoidBase <= 0 || secondTrapezoidBase <= 0 || trapezoidHeight <= 0) {
        alert('Error, please try again!');
        findTrapezoidPerimetr();
    } else {
        alert(`Perimetr = ${trapezoidPerimeter}`);
    }
}

//--------------------- 9 среднее арифметическое и среднее геометрическое модулей

function findAverageNumbersModule() {

    let firstNumberModule = Math.abs(+prompt('Enter first number'));
    let secondNumberModule = Math.abs(+prompt('Enter second number'));
    let arithmeticMeanModule = (firstNumberModule + secondNumberModule) / 2;
    let geometricMeanModule = Math.sqrt(firstNumberModule * secondNumberModule);
    
    alert(`Arithmetic Mean Module is: ${arithmeticMeanModule}`);
    alert(`Geometric Mean Module is: ${geometricMeanModule}`);
    
}

//-------------------- 10 Даны стороны прямоугольника. Найти его периметр и длину диагонали

function findRectangleValues() {

    let firstSide = +prompt('enter one side of the rectangle');
    let secondSide = +prompt('enter another side of the rectangle');
    let rectangleDiagonal = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
    let rectanglePerimetr = (firstSide + secondSide) * 2;

    if (firstSide <= 0 || secondSide <= 0) {
        alert('Error, please try again!');
        findRectangleValues();
    } else {
        alert(`Rectangle Diagonal = ${rectangleDiagonal}`);
        alert(`Rectangle Perimetr = ${rectanglePerimetr}`);
    }
}

//-------------------- 11 Найти сумму, разность, произведение, а также частное от деления первого числа на второе

function arithmeticOperations() {

    let firstNumber = +prompt('Enter first number');
    let secondNumber = +prompt('Enter second number');
    let arithmeticSum = firstNumber + secondNumber;
    let arithmeticDifference = firstNumber - secondNumber;
    let arithmeticMultiplication = firstNumber * secondNumber;
    let arithmeticDivision = firstNumber / secondNumber;
    
    alert(`Sum is: ${arithmeticSum}`);
    alert(`Difference is: ${arithmeticDifference}`);
    alert(`Multiplication is: ${arithmeticMultiplication}`);
    alert(`Division is: ${arithmeticDivision}`);
    
    }

//-------------------- 12 паралелепипед

function findCuboid() {

    let firstNumber = +prompt('Enter first side');
    let secondNumber = +prompt('Enter second side');
    let heightNumber = +prompt('Enter height');
    let volume = firstNumber * secondNumber * heightNumber;
    let square = 2 * (firstNumber * heightNumber + secondNumber * heightNumber);

    if (firstNumber <= 0 || secondNumber <= 0 || heightNumber <= 0) {
        alert('Error, please try again!');
        findRectangleValues();
    } else {
        alert(`volume is: ${volume}`);
        alert(`square is: ${square}`);
    }
}

//------------------ 24 Дано двузначное число. Определить совпадают ли у него цифры

function numberMatching() {

    let twoDigitNumber = prompt('Enter two-digit number');
    let checkNumber = twoDigitNumber.split('').reverse().join('');
    
    if (isNaN(twoDigitNumber) || twoDigitNumber.length != 2 || twoDigitNumber < 0) {
        alert('Error, please try again!');
        numberMatching();
    } else if (checkNumber == twoDigitNumber) {
        alert(true);
    } else {
        alert(false);
    }
}

//------------------- 25 Определить сколько часов, минут и секунд прошло с начала дня

function calcTimePassed() {

    let timeInSeconds = +prompt('Enter two-digit number');
    let timeInMinutes = timeInSeconds / 60;
    let timeInHours = timeInSeconds / 3600;

    let timePassedHours = Math.trunc(timeInHours);
    let timePassedMinutes = Math.trunc(timeInMinutes - Math.trunc(timeInHours) * 60);
    let timePassedSeconds = timeInSeconds - timePassedHours * 3600 - timePassedMinutes * 60;

    if (timeInSeconds > 24 * 3600 || timeInSeconds < 0 || isNaN(timeInSeconds)) {
        alert('Error, please try again!');
        calcTimePassed();
    } else {
        alert(`Passed: ${timePassedHours} hours, ${timePassedMinutes} minutes, ${timePassedSeconds} seconds`);
    }
}

//------------------- 26 Даны две даты  определить какая из них больше

function compareDates() {

    let firstDateDay = document.getElementsByClassName("input--first-day")[0].value;
    let firstDateMonth = document.getElementsByClassName("input--first-month")[0].value;
    let firstDateYear = document.getElementsByClassName("input--first-year")[0].value;

    let secondDateDay = document.getElementsByClassName("input--second-day")[0].value;
    let secondDateMonth = document.getElementsByClassName("input--second-month")[0].value;
    let secondDateYear = document.getElementsByClassName("input--second-year")[0].value;

    if (firstDateDay <= 0 || firstDateDay > 31 || secondDateDay <= 0 || secondDateDay > 31) {
        alert('Error, please try again!');
    } else if (firstDateMonth <= 0 || firstDateMonth > 12 || secondDateMonth <= 0 || secondDateMonth > 12) {
        alert('Error, please try again!');
    } else if (firstDateYear > secondDateYear) {
        alert(`${firstDateDay}.${firstDateMonth}.${firstDateYear} > ${secondDateDay}.${secondDateMonth}.${secondDateYear}`);
    } else if (firstDateYear === secondDateYear && firstDateMonth > secondDateMonth) {
        alert(`${firstDateDay}.${firstDateMonth}.${firstDateYear} > ${secondDateDay}.${secondDateMonth}.${secondDateYear}`);
    } else if (firstDateYear === secondDateYear && firstDateMonth === secondDateMonth && firstDateDay > secondDateDay) {
        alert(`${firstDateDay}.${firstDateMonth}.${firstDateYear} > ${secondDateDay}.${secondDateMonth}.${secondDateYear}`);
    }     else if (firstDateYear === secondDateYear && firstDateMonth === secondDateMonth && firstDateDay === secondDateDay) {
        alert(`${firstDateDay}.${firstDateMonth}.${firstDateYear} = ${secondDateDay}.${secondDateMonth}.${secondDateYear}`);
    } else {
        alert(`${firstDateDay}.${firstDateMonth}.${firstDateYear} < ${secondDateDay}.${secondDateMonth}.${secondDateYear}`);
    }
}

//--------------------- 27 сколько квадратов можно расположить на данном прямоугольнике

function findNumberOfSquares() {

    let firstRectangleSide = document.getElementsByClassName("input--first-side")[0].value;
    let secondRectangleSide = document.getElementsByClassName("input--second-side")[0].value;
    let squareSide = document.getElementsByClassName("input--square-side")[0].value;

    let squareArea = Math.pow(squareSide, 2);
    let rectangleArea = firstRectangleSide * secondRectangleSide;

    let numberOfObjects = Math.trunc(rectangleArea / squareArea);

    if (rectangleArea < squareArea || rectangleArea <= 0 || squareArea <= 0) {
        alert('Error, please try again!');
    } else {
        alert(numberOfObjects);
    }
}