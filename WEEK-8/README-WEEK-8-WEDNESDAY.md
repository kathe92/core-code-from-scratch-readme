# Week 8 - Wednesday


## Exercises



### Make the Deadfish Swim

***Description:***

<img width="672" alt="image" src="https://user-images.githubusercontent.com/86013814/171756769-0974c240-7ae9-46b0-8375-c3edafe9230c.png">

https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

***Solution:***

```typescript
export function parse(data: string): number[] {
  let number = 0;
  const finalResult: number[] = [];
  const commands = data.split('');
  commands.forEach((command: string) => {
    switch (command) {
      case 'i':
        number++;
        break;
      case 'd':
        number--;
        break;
      case 's':
        number = Math.pow(number, 2);
        break;
      case 'o':
        finalResult.push(number);
        break;
    }
  });
  return finalResult;
}
```
