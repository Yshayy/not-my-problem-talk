const express = require('express')
const app = express()

const users = {
    alice: {
        name: "Alice A"
    },
    bob: {

    }
}

app.get('/api/users/:userId', (req, res) => {
    if (Math.random() < 0.3){
        return res.status(500).send("users service had a random failure")
    }
    return res.json(users[req.param("userId")])
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))