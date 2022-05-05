# Week 4 - Wednesday


## CodeWars Exercise

### Simple validation of a username with regex

Description:

<img width="657" alt="image" src="https://user-images.githubusercontent.com/86013814/166846320-b26d7fd6-08a5-46c2-934a-2658c84a65a4.png">

https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

Solution:

``` javascript
function validateUsr(username) {
  res = /^[a-z0-9_]{4,16}$/.test(username) 
  return res
}
```

### Get number from string

Description:

<img width="673" alt="image" src="https://user-images.githubusercontent.com/86013814/166846531-05e81cf1-3b36-4394-abbb-e35b4ac5eddd.png">

https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

Solution:

``` javascript
function getNumberFromString(s) {
  let number = /[^0-9\.]+/g
  let newstr = s.replace(number, "");
  return Number(newstr);
}
```
