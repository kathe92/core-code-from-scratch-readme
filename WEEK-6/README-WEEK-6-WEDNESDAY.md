# Week 6 - Wednesday


## Exercises

### Duplicate Encoder 

***Description:***

<img width="673" alt="image" src="https://user-images.githubusercontent.com/86013814/169172583-e5ad4012-ee0a-4d85-a9c4-2ac3c5bf0a5f.png">

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript

***Solution:***

``` typescript
export function duplicateEncode(word:string){
    return word.toLowerCase().split('').map(letter => { //pone la palabra en minuscula y las separa
      if (word.toLowerCase().split('').filter(k => k === letter).length > 1) { filtra en un nuevo arreglo y compara si la letra ya existe para agregarla
        return ')'; //si ya existe la letra retorna )
      }
      return '('; //sino existe retorna (
    }).join('') //se une todo en con un join
}
```

### Find The Odd Int 

***Description:***

<img width="652" alt="image" src="https://user-images.githubusercontent.com/86013814/169172645-24de8319-df03-4b1e-bcbe-203f971db439.png">

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

***Solution:***

``` typescript
export const findOdd = (xs: number[]) : number => {
  let result:number = 0;
  for (let i:number = 0; i < xs.length; i ++) { //recorre el arreglo
    let elemLength:number = xs.filter((elm) => elm === xs[i]).length; //crea un nuevo arreglo de los elementos y cuenta el valor que se repite
    if (elemLength % 2 !== 0) { //si el contador al dividirlo por 2 es distinto a 0 - osea es impar
      result = xs[i]; //devuelve el valor
    }
  }
  return result;
};
```

### Which Are In? 

***Description:***

<img width="670" alt="image" src="https://user-images.githubusercontent.com/86013814/169172752-91683b67-cb41-46b1-97ef-d5f9666c12d9.png">

https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript

***Solution:***

``` typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    let result:string [] = [];
    for (let j:number = 0; j < a1.length; j++) {
        for (let i:number = 0; i < a2.length; i++) {
            if ( a2[i].includes(a1[j]) ) {
                result.push(a1[j]);
                break;
            }
        }
    }
    return result.sort();
  }
}
```

### Sums Of Parts

***Description:***

<img width="666" alt="image" src="https://user-images.githubusercontent.com/86013814/169172830-7af2b8a7-2ec8-4c09-81f0-20fb58005308.png">

https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript

***Solution:***

``` typescript
function partsSums(ls: number[]): number[] {
  let lsReverse:number [] = ls.reverse(); //ordena el arreglo a sentido contrario
  let result = [0]
  for(let n in lsReverse){ //recorre el arreglo
    result.push(lsReverse[n] + result[n]); //suma el valor de la primera variable del arreglo con result que es 0, corrida 1: 10+0 = 10, corrida 2 = 6+10=16, corrida 3= 3+16 = 19
  } //y los va agregando en el array result
  return result.reverse(); //luego los ordena en reversa
}
```

### Consecutive Strings

***Description:***

<img width="663" alt="image" src="https://user-images.githubusercontent.com/86013814/169172872-5108a0d8-14d2-4948-901a-f586fb752b72.png">

https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript

***Solution:***

``` typescript
export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return ''; //si el arreglo es vacio o k es menor o igual a 0 retorna vacio
    let result:string = '';
    let newArray:string []= [];
    
    for (let i:number = 0; i < strarr.length; i++){ //recorre el arreglo
      newArray = strarr.slice( i, i+k); //crea un nuevo arreglo dividiendolo por el numero se ingreso en k
      if (newArray.join('').length > result.length ){ //compara el valor de la union del nuevo arreglo con el resultado guardado en result
        result = newArray.join(''); //si es mayor lo que hay en resultado se guarda el nuevo array
      }
    }
    return result; //retorna el resultado
}
```


