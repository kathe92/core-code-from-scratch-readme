# Week 5 - Monday


## CodeWars Exercise

### Find The Missing Letter

***Description:***

<img width="670" alt="image" src="https://user-images.githubusercontent.com/86013814/167515565-3d425287-fa6a-46f1-8226-12b44a673138.png">

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

***Solution:***

``` javascript
let findMissingLetter = (arr) => {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const first = arr[0]
  if (first === first.toUpperCase()){
    alphabet = alphabet.join('').toUpperCase().split('')
  }
  let j = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[j]) return alphabet[j];
    j++;
  }
}
```

### Reverse Or Rotate?

***Description:***

<img width="665" alt="image" src="https://user-images.githubusercontent.com/86013814/167515657-8f5a518a-b11e-4a9e-8d1d-5fd471089d41.png">

https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

***Solution:***

``` javascript
function revrot(str, sz) {
  let result="";
  if(str.length<sz||str.length == 0||sz == 0){
    return result;
  }
  let cubeNum = Math.floor(str.length/sz);
  for(let i = 0 ; i < cubeNum; i++){
    let cube = str.slice(i*sz,(i+1)*sz);
    let sum = 0;
    for(var j = 0; j < cube.length; j++){
      sum = parseInt(cube.charAt(j)) + parseInt(sum);
    }
    if(sum%2== 0){
      for(var j =cube.length; j >= 0; j--){
        result += cube.charAt(j)+'';
      }
    } else{
      var firstCode =  cube.split("").splice(0,1).toString();
      result += cube.split("").splice(1,cube.length).join("") + firstCode;
    }
  }
  return result;
}
```
