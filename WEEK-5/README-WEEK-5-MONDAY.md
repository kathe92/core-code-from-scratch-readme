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
function revrot(str, sz) { //("123456987654", 6)
  if(str.length<sz||str.length == 0||sz == 0){
   return '';
  } else {
   let num=parseInt(str.length/sz); //divide el tamano del arreglo entre el valor de sz y lo convierte a entero
   //ej: 12/6 = 2
   let a=[];
   let b=[];            
   for(let i=0; i < num; i++){ // i=0;i<2
     a[i]=str.substr(sz*i,sz); //6*0 = 0 hasta 6
     let sum=0;               
     for(let j=0; j<sz; j++){ // i=0;i<6
       sum=sum+Math.pow(a[i][j],3);
     }
     a[i]=sum%2==0 ? reverse(a[i]) : rotate(a[i]);
     b = b.concat(a[i]);
  }
   return b.join("");
 }
}

function reverse(str){
  return str.split("").reverse().join("").toString();

}
function rotate(str){  
  return str.substr(1).concat(str.slice(0,1));
}
```
