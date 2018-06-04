const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

const messages = {
    alice: [],
    bob: []
}

app.get('/api/users/:userId/messages', (req, res) => {
    return res.json(messages[req.param("userId")])
});

app.post('/api/users/:userId/messages', (req, res) => {
    (messages[req.param("userId")] || []).push(req.body.message)
    return res.json({});
});

app.listen(3000)