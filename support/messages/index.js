const express = require('express')
const app = express()
app.use(express.static('public'))

const messages = {
    alice: [{text:"hello alice"}],
    bob: [{text:"hello bob"}]
}

app.get('/api/users/:userId/messages', (req, res) => {
    return res.json(messages[req.param("userId")])
});

app.post('/api/users/:userId/messages', (req, res) => {
    (messages[req.param("userId")] || []).push(req.body)
    return res.sendStatus(200);
});

app.listen(3000)