# Week 6 - Thursday


## Exercises

### Tile

***Description:***
In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

1. Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.
2. Write a constructor that takes parameters named letter and value and initializes the instance variables.
3. Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).
4. Don't worry you don't have to check if the letter is no more than one String length.
5. You can use this Main class to test your code.

***Solution:***

``` typescript
import { Tile } from './Tile';
export class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
```

### Time

***Description:***
You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

1. Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second.
2. Write a constructor that takes parameters named hour, minute and second and initializes the instance variables.
3. Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
4. Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).

***Solution:***

``` typescript
import { Tile } from './Tile';
export class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
```

### Rational

***Description:***
A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.

1. Create a new class named Rational. A Rational object should have two number instance variables to store the numerator and denominator.
2. Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables.
3. Write a method called printRational that prints the object in some reasonable format.
4. Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
5. Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
6. Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.

***Solution:***

``` typescript
import { Rational } from './Rational';
export class Main {
  start() {
    const r1 = new Rational(36, 120);
    r1.printRational(); // 36 / 120
    console.log(r1.toFloat()); // 0.3
    r1.reduce();
    r1.printRational(); // 3 / 10
    r1.invert();
    r1.printRational(); // 10 / 3
    r1.reduce();
    r1.printRational(); // 10 / 3
  }
}
```
