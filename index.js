const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if(req.query.user) {
        user = req.query.user
    } else {
        user = "World"
    }
    res.send(`Hello ${user}!`)
    console.log(`Request from ${req.ip}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
