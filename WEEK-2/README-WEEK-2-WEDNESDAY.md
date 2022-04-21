# Week 2 - Wednesday


## CodeWars Exercise

### Holiday VIII - Duty Free

``` javascript
function dutyFree(normPrice, discount, hol){
  let totalDiscount = (normPrice * discount)/100;
  let bottlesWithDiscount = Math.floor(hol / totalDiscount);
  return bottlesWithDiscount;
}
```

### Twice As Old

``` javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let totalTwiceOld = ((2*sonYearsOld) - dadYearsOld);
  return Math.abs(totalTwiceOld);
}
```

### Valid Spacing

``` javascript


```

### Fake Binary

``` javascript
function fakeBin(x){
  let stringNum = x;
  let result = "";
  for (i in stringNum){
    if(parseInt(stringNum[i]) >= 5){
      result += "1";
    } else if (parseInt(stringNum[i]) < 5){
      result += "0";
    }
  }
  return result;
}
```



