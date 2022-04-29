# Week 3 - Wednesday


## CodeWars Exercise

### Fold An Array

``` javascript
function foldArray(array, runs)
{
  let arr = array.slice(); 
  for (let i = 0; i < runs; i++){
    let total = [];
    for (let k = 0, n = (arr.length - 1)/2; k <= n; k++){
      if ( k !== n){
        total.push(arr[k] + arr[arr.length - k - 1]);
      } else {
        total.push(arr[k]);
      }
    }    
    arr = total.slice();
  }
  return arr;
}
```

### Encrypt This! 

``` javascript
function encryptedWord(word) {
  if (word.length == 1) return word.charCodeAt();
  if (word.length == 2) return`${word.charCodeAt(0)}${word[1]}`;
  return`${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(2,word.length - 1)}${word[1]}`;
}

var encryptThis = function(text) {
  return text.split(' ').map(encryptedWord).join(' ');
};
```

## About Me

Hi, I am Katherine Perez, I’m from Nicaragua and my currently position is like QA Manual. I’ve been developing like quality assurance for two years ago, 
in USA and Ecuador startups. I’m a responsible and curious person, and I will keep working to build a future like QA Automation Engineer.
