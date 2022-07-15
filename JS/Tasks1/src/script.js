//--------------------- 1

function findAverageNumbers() {

let firstNumber = +prompt('Enter firs number');
let secondNumber = +prompt('Enter second number');
let arithmeticMean = (firstNumber + secondNumber) / 2;
let geometricMean = Math.sqrt(firstNumber * secondNumber);

alert(`ArithmeticMean is: ${arithmeticMean}`);
alert(`GeometricMean is: ${geometricMean}`);

}

//--------------------------- 2

function findBodyDensity() {

    let bodyVolume = +prompt('Enter body volume');
    let bodyMass = +prompt('Enter body mass');
    let bodyDensity = bodyMass * bodyVolume;
    
    alert(`BodyDensity is: ${bodyDensity}`);
    
    }