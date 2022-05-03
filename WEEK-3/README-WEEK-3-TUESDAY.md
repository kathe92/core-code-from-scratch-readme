# Week 3 - Tuesday


## CodeWars Exercise

### Simple Pig Latin 

Description: 

<img width="676" alt="image" src="https://user-images.githubusercontent.com/86013814/166601823-ff151872-6932-4c2b-b264-c25edbf69fb1.png">

Solution:

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

Description:

<img width="669" alt="image" src="https://user-images.githubusercontent.com/86013814/166602636-a21e4fb3-993f-48a5-b8c6-f30a141559e6.png">

Solution:

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

Description:

<img width="661" alt="image" src="https://user-images.githubusercontent.com/86013814/166603584-973d44ba-6f6c-4190-b0e2-55fa6f0d60fd.png">
<img width="667" alt="image" src="https://user-images.githubusercontent.com/86013814/166604112-7d52a121-4fdd-41ef-b96d-82d718dc1952.png">
<img width="665" alt="image" src="https://user-images.githubusercontent.com/86013814/166604223-260ee7c4-9d0f-4ed2-b7a1-18d8787afc0d.png">

Solution:

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
