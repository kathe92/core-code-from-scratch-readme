### Count frecuencies of the words in an array

``` javascript
function countFrequencies(words) {
  let resultado = {}

  for (let i of words){
    resultado[i] = resultado[i] + 1 || 1;
    console.log(resultado);
    
  } 
  return propertyValues = Object.values(resultado);
}

console.log(countFrequencies(['the', 'bone', 'dogs', 'the']))
```

### Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

``` javascript
function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  return "Odd"
}
```

### Tribonacci Sequence

``` javascript
function tribonacci(signature,n) {
  var numbers = signature;
  for (let i = 3; i < n; i++) {
    numbers.push((numbers[i-1] + numbers[i-2] + numbers[i-3]));
  }
  return numbers.slice(0, n);
}

console.log(tribonacci([1,1,1],10));
console.log(tribonacci([0,0,1],10));
```

### 

``` javascript

```

### 

``` javascript

```
