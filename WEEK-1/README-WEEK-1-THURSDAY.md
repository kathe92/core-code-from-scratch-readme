# Week 1 - Thursday

## Print special numbers

### Description
In this exercise you must use an iterative flow control to be able to print all the even numbers in the range of numbers from 0 to 100. 
Remember that you should not print each number, you should use a flow control structure to perform the exercise

### For

``` javascript
for (let k = 0; k <= 100; k++) {
  if (k % 2 == 0) {
  	console.log(k);
  }
}
```

### While

``` javascript
let k = 0;

while (k <= 100) {
  if (k % 2 == 0) {
  	console.log(k);
  }
  k++
}
```

### do While

``` javascript
let k = 0;

do {
  if (k % 2 == 0) {
  	console.log(k);
  }
  k++
} while (k <= 100);
```

## Bad Code exercise

### Solution

The error is in using double parenthesis to validate the variable "cond" and that double equal should be used.

The code could be:

``` javascript
var cond = false;

if (cond == true) {
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```

## Bad Code 2 exercise

### Description
You must create the code that follows the following logic, if the given number is 100, take this number as special and show the following message: 
"This is a special number!", but if the number is less than 1000, multiple of 10 and different from 100, you must show the following message: 
"This number is almost special". if none of the given conditions are met show the following message: "Just a regular number". 
Another developer was trying to program the logic, but apparently couldn't, you need to fix the code to work properly


### Solution

``` javascript
let k = prompt("Add the number to validate");

if (k == 100) {
  console.log('This is a special number!');
}

else if(k < 1000 && k % 10 == 0) {
  console.log('This number is almost special');
}

else {
  console.log('Just a regular number');
}
```
