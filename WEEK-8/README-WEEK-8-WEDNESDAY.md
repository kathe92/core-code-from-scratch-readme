# Week 8 - Wednesday


## Exercises

## Define generics in TypeScript 

<img width="603" alt="image" src="https://user-images.githubusercontent.com/86013814/171766306-e37f2acc-5587-427c-9c0c-f7a0e879c3b4.png">

### Link

https://docs.microsoft.com/en-us/learn/modules/typescript-generics/

### Lab

```typescript
/*  Module 6: DGenerics in TypeScript
    Lab End */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type. */

// TODO: Add and apply a type variable.
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }

}

let cities = new DataStore<string>();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London");
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(11));        // returns 'undefined'

// TODO Test items as numbers.
let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);                  
console.log(empIDs.GetData(0));         // returns 50

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3}

```

## Generics Exercise

### Description

https://github.com/corecodeio/devguide-from-scratch-2022-02/tree/main/src/technologies/2022/week08/exercises/e00/desc

### Link

https://github.com/kathe92/core-code-from-scratch-readme/tree/main/WEEK-8/Exercise%201/models

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
