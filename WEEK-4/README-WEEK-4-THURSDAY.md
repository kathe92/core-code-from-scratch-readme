# Week 4 - Thursday


## CodeWars Exercise

### String cleaning

***Description:***

<img width="671" alt="image" src="https://user-images.githubusercontent.com/86013814/166852213-155a793f-9f06-4d9d-93ea-24984526285f.png">

https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

***Solution:***

``` javascript
function stringClean(s){
  return replaced = s.replace(/[0-9]/g, '');
}
```

### Regex Password Validation

***Description:***

<img width="659" alt="image" src="https://user-images.githubusercontent.com/86013814/166852253-4e035744-1863-4801-9c66-a79b9331336f.png">

https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

***Solution:***

``` javascript
function validate(password) {
  return (/^([A-Za-z0-9]){6,}$/.test(password)&&
    /[A-Z]+/.test(password) &&
    /[a-z]+/.test(password) &&
    /[0-9]+/.test(password));
}
```
