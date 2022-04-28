### Count frecuencies of the words in an array

``` javascript
function countFrequencies(words) {
  let resultado = {}

  for (let i of words){
    resultado[i] = resultado[i] + 1 || 1;
    console.log(resultado);
    
  } 
  return propertyValues = Object.values(resultado);
}

console.log(countFrequencies(['the', 'bone', 'dogs', 'the']))
```
