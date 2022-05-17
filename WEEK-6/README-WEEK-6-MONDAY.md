# Week 5 - Monday


## Exercises

### Square(n) Sum

***Description:***

<img width="661" alt="image" src="https://user-images.githubusercontent.com/86013814/168695815-ece5c23a-deae-4601-a5a6-23ae568d7bfc.png">

https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript

***Solution:***

``` typescript
export function squareSum(numbers: number[]): number {
   let sum = 0;
   for(let i=0; i<numbers.length; i++){
      sum += Math.pow(numbers[i],2);
   }
   return sum;
}
```

### Growth Of A Population

***Description:***

<img width="677" alt="image" src="https://user-images.githubusercontent.com/86013814/168695918-7beeda7a-3b49-4e53-8ca0-0a5b3508b27e.png">

https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript

***Solution:***

``` typescript
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
      let year=0;
      while (p0 < p){
        year ++; 
        p0 = parseInt(p0 + (p0*(percent/100)) + aug)
      }
      return year
    }
}
```

### Mumbling

***Description:***

<img width="670" alt="image" src="https://user-images.githubusercontent.com/86013814/168695990-0bc52d5b-b1d3-49ff-8bff-f31cb4a759d5.png">

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript

***Solution:***

``` typescript
function accum(s: string): string {
   return s.split("").map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join("-");
}

console.log(accum("ZpglnRxqenU"));
```

### A Wolf In Sheep's Clothing

***Description:***

<img width="670" alt="image" src="https://user-images.githubusercontent.com/86013814/168696075-bd571b4a-57b3-4d61-b59a-aea63ed18b4e.png">

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript

***Solution:***

``` typescript
export function warnTheSheep(queue: string[]): string {
   const position = queue.reverse().indexOf('wolf');
   //console.log(position)
   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
```


