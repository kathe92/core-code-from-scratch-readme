# OOP glossary


## Abstraction

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The "abstract" keyword is used to define abstract classes as well as abstract methods within an abstract class.

Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the abstract keyword and may optionally include access modifiers.

<img width="901" alt="image" src="https://user-images.githubusercontent.com/86013814/170147549-92e026ad-3431-4c71-a475-7b37464c37a4.png">

## Inheritance

Classes inherit properties and methods from base classes. Here, Dog is a derived class that derives from the Animal base class using the extends keyword. Derived classes are often called subclasses, and base classes are often called superclasses.

Because Dog extends the functionality from Animal, we were able to create an instance of Dog that could both bark() and move().

<img width="897" alt="image" src="https://user-images.githubusercontent.com/86013814/170147626-4227202b-6649-4802-8811-3344468d616b.png">

## Polymorphism

Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.

<img width="621" alt="image" src="https://user-images.githubusercontent.com/86013814/170147905-b01592c6-9261-489c-89cf-951328ec637a.png">

The results of the makeSound methods are the same, but the approach is a little bit different.

## Encapsulation

Encapsulation enables you to perform what’s called “data hiding”. It’s necessary to hide certain data so that it’s not changed accidentally or purposefully by other components or code in the program. For example, you don’t want any code from outside of the CheckingAccount class calling its private methods directly. But the data that is inside the CheckingAccount class can and should be changed by other code in the CheckingAccount class itself. If encapsulated, the data can be exposed thoughtfully to other classes through methods and properties that enforce business rules.

The following code sample shows that the minimumBalance a simple public field. This means that both the BankAccount class and any code that creates instances of the BankAccount class can modify the minimumBalance. When the consuming code can modify the members directly, then accounts may contain less money than is allowed, therefore breaking the bank’s business rules (i.e., less than the minimum balance). On the other hand, the _balance field is properly encapsulated because it is private. Only code within the BankAccount class can modify it. Calling code may only read it through the balance getter method. As members of BankAccount, deposit and withdraw modify the balance from within the BankAccount class, and that imposes business rules correctly, producing the desired behavior through encapsulation.

<img width="780" alt="image" src="https://user-images.githubusercontent.com/86013814/170148093-2cd6ba0c-03a5-4108-a55e-311c4cf8d237.png">

As you can see, the developer can change certain parts of the code without causing bugs in other parts, since the data is encapsulated. This increases the validity and integrity of the of data.

## Class

Classes are the fundamental entities used to create reusable components.

The class in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across platforms and browsers.

A class can include the following:

- Constructor
- Properties
- Methods

<img width="935" alt="image" src="https://user-images.githubusercontent.com/86013814/170148532-355fef87-be5d-4fd5-adae-841aeb5fe553.png">

## Object

An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below:

<img width="819" alt="image" src="https://user-images.githubusercontent.com/86013814/170148973-7654a7a4-94c1-4ea4-9705-4c4ae1f39119.png">

As shown above, an object can contain scalar values, functions and structures like arrays and tuples.

<img width="844" alt="image" src="https://user-images.githubusercontent.com/86013814/170149026-ab817d94-4c1d-40a8-9d47-daa24ac40813.png">

## Instance

To create an instance of the class, use the new keyword followed by the class name. The syntax for the same is given below.

```typescript
var object_name = new class_name([ arguments ])
```
- The new keyword is responsible for instantiation.
- The right-hand side of the expression invokes the constructor. The constructor should be passed values if it is parameterized.

## Interface

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.

<img width="904" alt="image" src="https://user-images.githubusercontent.com/86013814/170148628-c8e7c46a-2368-47d6-912a-6be21bb35993.png">

## Access Modifiers

Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

- private
- protected
- public

### The private modifier

The private modifier limits the visibility to the same-class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compile time.

The following example shows how to use the private modifier to the snn, firstName, and lastName properties of the person class:

<img width="704" alt="image" src="https://user-images.githubusercontent.com/86013814/170149338-50766036-193b-4298-9308-633d894ff09a.png">

Once the private property is in place, you can access the ssn property in the constructor or methods of the Person class. For example:

<img width="705" alt="image" src="https://user-images.githubusercontent.com/86013814/170149370-1b68c69c-cf45-423f-ad58-f9732cb5f9c6.png">

The following attempts to access the ssn property outside the class:

<img width="707" alt="image" src="https://user-images.githubusercontent.com/86013814/170149422-131d1ccb-b13b-4575-9ebc-b159ce7b032e.png">

### The public modifier

The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

For example, the getFullName() method of the Person class has the public modifier. The following explicitly adds the public modifier to the getFullName() method:

<img width="709" alt="image" src="https://user-images.githubusercontent.com/86013814/170149487-23d0cb5c-785e-4b25-8939-d456d89fe1c8.png">

It has the same effect as if the public keyword were omitted.

### The protected modifier

The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.

When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.

The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.

To add the protected modifier to a property or a method, you use the protected keyword. For example:

<img width="707" alt="image" src="https://user-images.githubusercontent.com/86013814/170149544-a61b9422-e0e9-4d44-9d69-cfda17413686.png">

The ssn property now is protected. It will be accessible within the Person class and in any class that inherits from the Person class. You’ll learn more about inheritance here.

The Person class declares the two private properties and one protected property. Its constructor initializes these properties to three arguments. 

```typescript
class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```
When you consider the visibility of properties and methods, it is a good practice to start with the least visible access modifier, which is private.

## Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

<img width="910" alt="image" src="https://user-images.githubusercontent.com/86013814/170148777-90cc577b-e09a-40af-8817-8821cd9023dc.png">

There are just a few differences between class constructor signatures and function signatures:

Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
Constructors can’t have return type annotations - the class instance type is always what’s returned

### Super Calls

Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:

<img width="904" alt="image" src="https://user-images.githubusercontent.com/86013814/170148846-766bfe12-f634-47f3-8fa5-aa10013d1060.png">

Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.
