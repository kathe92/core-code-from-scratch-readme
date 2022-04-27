# Week 3 - Tuesday


## CodeWars Exercise

### Simple Pig Latin 

``` javascript
function pigIt(str){
  let marksP = ['!', '¡', '?', '¿', '.', ',', ':', ';'];
  let arrayStr = str.split(" ");

  for (let i in arrayStr){
    if (marksP.indexOf(arrayStr[i]) >= 0) continue;
    arrayStr[i] = arrayStr[i].slice(1) + arrayStr[i].slice(0, 1) + 'ay';
  }
  
  return arrayStr.join(' ');
}
```

### Counting Duplicates

``` javascript
function duplicateCount(text){
  let textLowerCase = text.toLowerCase().split('').sort();
  let myObj = {};
  let counter = 0;

  for (let i = 0; i < textLowerCase.length; i++) {
    if (!myObj[textLowerCase[i]]){
      myObj[textLowerCase[i]] = 1;
    }
    else if (myObj[textLowerCase[i]] < 2) {
      myObj[textLowerCase[i]] += 1;
      counter++;
    }
  }
    return counter;
}
```


### Decode The Morse Code

``` javascript
decodeMorse = function(morseCode){
  morseCode = morseCode.trim();
  let arrayMorse = morseCode.split('   ');
  let result = [];
  
  for (let i = 0; i < arrayMorse.length; i++) {
    let variable = arrayMorse[i].split(' ');
    for (let j = 0; j < variable.length; j++) {
      if (MORSE_CODE[variable[j]]) {
        result.push(MORSE_CODE[variable[j]]);
      }
    }
    
    if (i !== arrayMorse.length - 1) {
    result.push(' ');
    }
  }
  return result.join('');
}
```
