# Week 11 - Monday


## Forrest Gump Ping-Pong API:

***Link***: 

https://github.com/kathe92/core-code-from-scratch-readme/tree/main/WEEK-11/Exercise%201%20-%20Github

***Postman***: 

<img width="1102" alt="image" src="https://user-images.githubusercontent.com/86013814/174700494-5c5dfc89-1e9f-48f9-bb34-347d9087d003.png">

<img width="1109" alt="image" src="https://user-images.githubusercontent.com/86013814/174700562-1402919c-c752-4639-8400-738c34703003.png">

## Delayed Response API ⏳:

***Response***: 

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/api/delay/:delay', (req, res) => {
    const delay = req.params.delay
    setTimeout(function() {
        res.send('Its a delay');
    },delay);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```
