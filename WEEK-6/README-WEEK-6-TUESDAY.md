# Week 6 - Tuesday


## Exercises

### A Rule Of Divisibility By 13

***Description:***

<img width="675" alt="image" src="https://user-images.githubusercontent.com/86013814/168928753-baa1f8c4-f4e8-449d-bd8b-30d79e06007c.png">
<img width="666" alt="image" src="https://user-images.githubusercontent.com/86013814/168928776-23378db2-c1c5-4191-91f3-87a695bc4936.png">

https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript

***Solution:***

``` typescript
export function thirt(n: number): number {
  const arr = [1, 10, 9, 12, 3, 4]
  while (n >= 100) {
    let sum: number = 0
    let test: number = n
    let i: number = 0
    while (test != 0) {
      sum += (test % 10) * arr[i++ % 6]
      test = Math.floor(test / 10)
    }
    n = sum
  }
  return n
}
```

### Playing With Digits

***Description:***

<img width="662" alt="image" src="https://user-images.githubusercontent.com/86013814/168928855-8a1f7bf5-9933-4889-84cc-fbfcbf79263a.png">

https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript

***Solution:***

``` typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
      let nToString: string = n.toString();
      let result: number = 0;
      for(let i = 0; i < nToString.length ; i++) {
          let numberser = parseInt(nToString.charAt(i),10);
          result +=  Math.pow(numberser, p + i)
          }
          let compare = Math.pow(n,p);
          if (result === compare) return p;
          else if (result % n === 0) return result / n;
          return -1  
    }
}
```

### Valid Braces

***Description:***

<img width="673" alt="image" src="https://user-images.githubusercontent.com/86013814/168928940-b4969b1e-5b8d-4e9e-b482-05f5015f4a67.png">

https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/typescript

***Solution:***

``` typescript
export function validBraces(braces: string): boolean {
  let search:string [] = []
  for(let i:number = 0; i < braces.length; i++){
    if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){ //compara con el primer brace introducido en el string
      search.push(braces[i]) //inserta el valor en el array search
    } else {
      if(search.length === 0) return false
      let lastValue = search[search.length-1]//Busca el valor guardado en el array search (tamano 1 - 1 para obtener posicion)
      if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
      {
        search.pop() //si coincide con el que abre elimina el valor guardado en el array
      } else {
        break;//sino se rompe el ciclo
      }
    }
  }
  return search.length === 0
}
```

### Tic-Tac-Toe

***Description:***

<img width="664" alt="image" src="https://user-images.githubusercontent.com/86013814/168929045-1bc392bb-1fe7-4744-87e3-c348efa84095.png">

https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc/train/javascript

***Solution:***

``` javascript
const validSpotsInBoard = new Map([
  [
    0,
    [
      [3, 6],
      [1, 2],
      [4, 8],
    ],
  ],
  [
    1,
    [
      [0, 2],
      [4, 7],
    ],
  ],
  [
    2,
    [
      [0, 1],
      [6, 4],
      [5, 8],
    ],
  ],
  [
    3,
    [
      [0, 6],
      [4, 5],
    ],
  ],
  [
    4,
    [
      [0, 8],
      [6, 2],
      [1, 7],
      [3, 5],
    ],
  ],
  [
    5,
    [
      [2, 8],
      [3, 4],
    ],
  ],
  [
    6,
    [
      [0, 3],
      [7, 8],
      [4, 2],
    ],
  ],
  [
    7,
    [
      [6, 8],
      [1, 4],
    ],
  ],
  [
    8,
    [
      [0, 4],
      [6, 7],
      [2, 5],
    ],
  ],
]);

const getIndexOfEmpy = (array, indexOne, indexTwo) => {
  if (array[indexOne] === '') return indexOne;
  return indexTwo;
};

const areValidSpots = (array, indexOne, indexTwo) => {
  return array[indexOne] !== 'O' && array[indexTwo] !== 'O';
};

const isWinSpot = (array, indexOne, indexTwo) => {
  if (array[indexOne] === 'X' && array[indexTwo] === '') return true;
  if (array[indexOne] === '' && array[indexTwo] === 'X') return true;
  return false;
};

const getWinIndex = (array, validSpots) => {
  for (let i = 0; i < validSpots.length; i++) {
    if (isWinSpot(array, ...validSpots[i]))
      return getIndexOfEmpy(array, ...validSpots[i]);
  }
  return -1;
};

function solveTTT(board) {
  const countX = board.filter((x) => x === 'X').length; //Filtrar todas las x
  if (countX == 1) return board.indexOf('');
  let xIndex = board.indexOf('X');
  let verifySpots = [];
  let validSpots = [];
  while (xIndex != -1) {
    verifySpots = validSpotsInBoard.get(xIndex);
    xIndex = board.indexOf('X', xIndex + 1);
    verifySpots.forEach((spot) => {
      if (areValidSpots(board, ...spot)) {
        validSpots.push(spot);
      }
    });
  }
  let winIndex = getWinIndex(board, validSpots);
  if (winIndex == -1) return getIndexOfEmpy(board, ...validSpots[0]);
  return winIndex;
}
```

### Tic-Tac-Toe-Like Table Generator

***Description:***

<img width="667" alt="image" src="https://user-images.githubusercontent.com/86013814/168929158-26109901-488c-4bca-ab46-92c77f4790fd.png">

https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/javascript

***Solution:***

``` javascript

```
