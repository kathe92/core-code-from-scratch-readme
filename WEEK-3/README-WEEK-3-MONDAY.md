# Week 3 - Monday


## CodeWars Exercise

### Who Likes It? 

Description: 

<img width="675" alt="image" src="https://user-images.githubusercontent.com/86013814/166598379-92ddb902-06c9-49da-a326-2cda47a6756c.png">

Solution:

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

Description:

<img width="676" alt="image" src="https://user-images.githubusercontent.com/86013814/166599073-c5c660a3-5409-4d55-a97e-725f18c2ed9e.png">

Solution: 

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

Descripcion:

<img width="675" alt="image" src="https://user-images.githubusercontent.com/86013814/166599590-5c7e034d-e003-4ebc-b6df-729f0cf73112.png">

Solution:

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

