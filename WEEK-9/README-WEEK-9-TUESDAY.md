# Week 9 - Tuesday


## Exercises

### Easter egg list in ReactJS

***Description:***

<img width="670" alt="image" src="https://user-images.githubusercontent.com/86013814/173959054-673f0e0c-c1fd-43d6-b76d-26315b93e296.png">

https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript

***Solution:***

```javascript
import React from 'react';

export const EggList = (props) => {
    const {eggs} = props
    const listItems = eggs.map((value, index) => <EasterEgg key={index} name={value}/>)
    return <ul>{listItems}</ul>
}

export const EasterEgg = (props) => {
    const {name} = props
    return <li>{name}</li>;
}
```



