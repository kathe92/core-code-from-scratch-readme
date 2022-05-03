# Week 3 - Wednesday


## CodeWars Exercise

### Valid Parentheses

Description:

<img width="672" alt="image" src="https://user-images.githubusercontent.com/86013814/166604307-f9d27982-953a-499f-8588-fd7e04802bb9.png">

Solution:

``` javascript
function validParentheses(parens) {
  let array = [];
  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      array.push(parens[i]);
    }
    else if('(' !== array.pop()) {
      return false;
    }
  }
  return array.length === 0;
```

### Convert String To Camel Case 

Description:

<img width="657" alt="image" src="https://user-images.githubusercontent.com/86013814/166604360-5e67e6cd-5ec7-4276-94d3-b70a9d5cec7a.png">

Solution:

``` javascript
function toCamelCase(str){
  let result ="";
  
  for (let i in str){
    if (str[i-1] === "-" || str[i-1] === "_"){
      result += str[i].toUpperCase();
    } else if (str[i] !== '-' && str[i] !== '_') {
      result += str[i];
    } 
  }
  return result;
}
```

### Unique In Order

Description:

<img width="675" alt="image" src="https://user-images.githubusercontent.com/86013814/166604401-df6034a1-d26b-441c-bb36-2487dadda084.png">

Solution:

``` javascript
var uniqueInOrder=function(iterable){
  let arr = [];
    for (let i=0;i<iterable.length;i++) {
      if (iterable[i] !== iterable[i+1]) {
        arr.push(iterable[i]);
      }
      console.log(arr);
  }
  return arr;
}
```
