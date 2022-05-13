# Week 5 - Thursday


## CodeWars Exercise

### What's Your Poison?

***Description:***

<img width="685" alt="image" src="https://user-images.githubusercontent.com/86013814/168191259-28187be9-8c24-49cb-895a-d10db9029512.png">

https://www.codewars.com/kata/58c47a95e4eb57a5b9000094/train/javascript

***Solution:***

``` javascript
function find(rats) {
    let bottleNumber = 0;
    for (let i = 0; i < rats.length; i++) {
      bottleNumber += Math.pow(2,rats[i]);//eleva 2 al numero de la posicion del arreglo
      //luego realiza la suma a la variable bottleNumber.
    }
    return bottleNumber;
}
```

### Array.diff

***Description:***

<img width="674" alt="image" src="https://user-images.githubusercontent.com/86013814/168191380-eac39ca4-63ed-45b2-8bec-d6a6c5483023.png">

https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

***Solution:***

``` javascript
function arrayDiff(a, b) {
  let array = [];
  for(let i = 0; i < a.length; i++){
    if(b.indexOf(a[i]) < 0) array.push(a[i]); //se valida que b no este en la posicion i de a
    //si no esta devuelve -1 y se agrega en la variable array.
  }
  return array;
}
```
