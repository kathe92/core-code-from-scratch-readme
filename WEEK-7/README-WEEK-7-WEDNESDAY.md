# Week 7 - Wednesday


## Exercises

https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/

<img width="1393" alt="image" src="https://user-images.githubusercontent.com/86013814/170609523-33b801d9-ecec-41ef-a666-2f4830e06a60.png">

### Build Tower

***Description:***

<img width="666" alt="image" src="https://user-images.githubusercontent.com/86013814/170599014-15e2b86a-255f-46d8-9cd8-0b961c382372.png">
[
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript

***Solution:***

``` typescript
export const towerBuilder = (nFloors: number): string[] => {
  if (nFloors === 1) return ['*'];
  let finalTower: string[] = [];
  for (let i = 1; i <= nFloors; i++) {
    finalTower.push(
      `${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(
        nFloors - i
      )}`
    );
  }
  return finalTower;
};
```



### Meeting

***Description:***

<img width="677" alt="image" src="https://user-images.githubusercontent.com/86013814/170599463-951c04d4-d09c-43f5-95fd-4e93a5d6a39e.png">
[
https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript

***Solution:***

``` typescript
export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .sort((firstName: string, secondName: string) => {
      const [aFirstName, aLastName] = firstName.split(':');
      const [bFirstName, bLastName] = secondName.split(':');
      if (aLastName === bLastName) {
        return aFirstName > bFirstName ? 1 : bFirstName > aFirstName ? -1 : 0;
      }
      return aLastName > bLastName ? 1 : bLastName > aLastName ? -1 : 0;
    })
    .map((fullName: string) => {
      const [firstName, lastName] = fullName.split(':');
      return `(${lastName}, ${firstName})`;
    })
    .join('');
}
```
