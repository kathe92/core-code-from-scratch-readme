# Week 3 - Monday


## CodeWars Exercise

### Who Likes It? 

``` javascript
function likes(names) {
  let namesArray = names;
  if (namesArray.length === 0) return 'no one likes this';
  if (namesArray.length === 1) return `${namesArray[0]} likes this`;
  if (namesArray.length === 2) return `${namesArray[0]} and ${namesArray[1]} like this`;
  if (namesArray.length === 3) return `${namesArray[0]}, ${namesArray[1]} and ${namesArray[2]} like this`;
  return`${namesArray[0]}, ${namesArray[1]} and ${namesArray.length -2} others like this`;
}
```
### Bit Counting 

``` javascript
var countBits = function(n) {
  let binaryNumber =  n.toString(2)
  let arr = binaryNumber.split('');
  let result = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 1) 
      result ++;
  }
  return result;
};
```

### Your Order, Please 

``` javascript
function order(words) {
  let arrayWords = words.split(' ')
  let result = {}
  
  if (words === "") return ""

  arrayWords.forEach(item => {
    let number = item.match(/\d/g).join('')
    result[number] = item;
  })

  return Object.values(result).join(' ');
}
```

