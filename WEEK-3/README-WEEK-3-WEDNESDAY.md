# Week 3 - Wednesday


## CodeWars Exercise

### Valid Parentheses

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
