//---------- 1

console.log('//--------------------- task 1');

class Circle {

    constructor(circleRadius) {

        this.circleRadius = circleRadius;
    }

    get checkRadius() {

        return this.circleRadius;
    }

    set addRadius(value) {
        
        this.circleRadius = value;
    }

    get checkDiametr() {

        return this.circleRadius * 2;
    }

    getCircleArea() {

        return Math.pow(this.circleRadius, 2) * Math.PI;
    }

    getCircumference() {

        return 2 * Math.PI * this.circleRadius;
    }
}

const smallCircle = new Circle(15);

const biggerCircle = new Circle(15);

biggerCircle.addRadius = 30;

console.log(smallCircle);
console.log('area:', smallCircle.getCircleArea());
console.log('length:',smallCircle.getCircumference());

console.log(biggerCircle);
console.log('area:', biggerCircle.getCircleArea());
console.log('length:', biggerCircle.getCircumference());

console.log('//--------------------- task 2');

//----------------- 2

class Marker {

    constructor(color,inkQuantity) {
        this.color = color;
        this.inkQuantity = inkQuantity;
    }

    print(text) {

        const str = '' + text;
        let symbolLimit = this.inkQuantity / 0.5;
        let charactersAvailable = '';

        for (let i = 0; i < str.length; i ++) {

            charactersAvailable = charactersAvailable + str.charAt(i);

            if (str.charAt(i) !== ' ') {

                symbolLimit--;

                if (symbolLimit === 0) {

                    break;
                }
            }
        }

        return charactersAvailable;
    }
}


class RefuelingMarker extends Marker {
    constructor(color,inkQuantity)  {

        super(color,inkQuantity);
    }

    filledMarker(persent) {

        return this.inkQuantity = this.inkQuantity + persent;
    }
}

const marker1 = new Marker('red',10);

console.log(marker1);
console.log('will print:', marker1.print('sdfsgdfgdfg fgdfgdfgdfgdf dfgdfgdfgdfgdf dfgdfgfdgdfgfdgdffd fgdfgdfgdfgdfgdfg'));

const marker2 = new RefuelingMarker('blue',10);

console.log(marker2);

console.log(`if we fill up to: ${marker2.filledMarker(30)} %`);

console.log('will print:', marker2.print('sdfsgdfgdfg fgdfgdfgdfgdf dfgdfgdfgdfgdf dfgdfgfdgdfgfdgdffd fgdfgdfgdfgdfgdfg'));

//---------- 3

console.log('//--------------------- task 3');

class Employee {
    
    constructor(name,age,position) {

        this.name = name;
        this.age = age;
        this.position = position;
    }
}

const employer1 = new Employee('Kolya',30,'security');
const employer2 = new Employee('Vasya',26,'consultant');
const employer3 = new Employee('Lena',32,'cashier');

const objEmployee = {

    'Employer Name':
    [employer1.name,employer2.name,employer3.name],
    'Employer Age':
    [employer1.age,employer2.age,employer3.age],
    'Employer Position':
    [employer1.position,employer2.position,employer3.position]
}

console.log(objEmployee);

document.querySelector('.content').innerHTML = `<table class="employee"></table>`;

for(key in objEmployee) {
    
    let row = document.createElement('tr');
    row.innerHTML = `<td colspan=3>${key}</td>`;
    document.querySelector('.employee').appendChild(row);

    for(let i = 0; i < 1; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td class=text colspan=1>${objEmployee[key][0]}</td>
        <td class=text colspan=1>${objEmployee[key][1]}</td>
        <td class=text colspan=1>${objEmployee[key][2]}</td>`;
        document.querySelector('.employee').appendChild(row);
        
    }
}