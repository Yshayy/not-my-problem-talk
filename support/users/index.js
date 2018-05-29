const express = require('express')
const app = express()

const users = {
    alice: {

    },
    bob: {

    }
}

app.get('/users/:userId', (req, res) => {
    return res.json(users[req.param("userId")])
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))