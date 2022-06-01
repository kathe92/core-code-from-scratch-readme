# Week 8 - Tuesday

## Develop typed functions by using TypeScript 

https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/

<img width="769" alt="image" src="https://user-images.githubusercontent.com/86013814/171313079-3c152f8d-5c10-4a57-8c42-7ce11e6d1d5c.png">


```typescript
//type calculator = (x: number, y: number) => number;

//Interface:
interface calculator {
    (x: number, y: number): number;
}

let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

//console.log(addNumbers(1, 2));
//console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2));
```
### Labs

```typescript
/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
    type compareFunctionType = (a: number, b:number) => number;

/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
let sortDescending: compareFunctionType = (a, b) => {
if (a > b) {
    return -1;
} else if (b > a) {
    return 1;
} else {
    return 0;
}
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
let sortAscending: compareFunctionType = (a, b) => {
if (a > b) {
    return 1;
} else if (b > a) {
    return -1;
} else {
    return 0;
}
}

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);

/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}
    
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);
    
```


## Declare and instantiate classes in TypeScript 

https://docs.microsoft.com/en-us/learn/modules/typescript-declare-instantiate-classes/

<img width="631" alt="image" src="https://user-images.githubusercontent.com/86013814/171520202-1c9fcd9a-3630-485f-b01c-44d256b3e409.png">


```typescript
class Car {
    // Properties
    _make: string;
    _color: string;
    _doors: number;
    private static numberOfCars: number = 0;  // New static property

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }

    // Accessors
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }

    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }

    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;  
    }

    // This function performs work for the other method functions
    worker(): string {
        return this._make;
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}


//let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
//let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
//console.log(Car.getNumberOfCars());

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;
    
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
```



