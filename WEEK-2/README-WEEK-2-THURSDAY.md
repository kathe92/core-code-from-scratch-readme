# Week 2 - Thursday


## CodeWars Exercise

### Remove All Exclamation Marks From The End Of Sentence

``` javascript
function remove(string) {  
  let result=string;
  
  while (result[result.length - 1] === "!") {
    result = result.slice(0, -1);
  }

  return result;
}
```

### Vowel Remover

``` javascript
function shortcut (string) {
  let result = "";
  
  for (let i=0; i<string.length; i++){
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
      string.substring();
    } else {
      result += string [i];
    }
  }
  return result;
}
```

### Rock Paper Scissors!

``` javascript
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  } else if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
```

### Persistent Bugger

``` javascript
function persistence(num) {
  let count = 0;
  let arrayNumber = num.toString().split('');
  while (arrayNumber.length > 1){
    let results = 1;
    for (let i = 0; i < arrayNumber.length; i++){
      results *= arrayNumber[i]; 
    }    
    arrayNumber = results.toString().split('');
    count ++;
  }
  return count;
}
```
