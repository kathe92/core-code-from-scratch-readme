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

### Concatenar Arreglos 

<img width="1287" alt="Captura de Pantalla 2022-05-05 a la(s) 18 24 07" src="https://user-images.githubusercontent.com/86013814/167047519-6abc94ff-4932-4263-b6bf-8092ddf45ea1.png">

``` javascript
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers);
```

### 

``` javascript

```
