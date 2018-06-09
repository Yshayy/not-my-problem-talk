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

app.delete('/api/users/:userId/messages', (req, res) => {
    messages[req.param("userId")] = [];
    return res.json({});
});

app.get('/api/users/:userId/messages', (req, res) => {
    return res.json(messages[req.param("userId")])
});

app.post('/api/users/:userId/messages', (req, res) => {
    setTimeout(()=>{
        (messages[req.param("userId")] || []).unshift(
            {
                time: new Date().toISOString(),
                message: req.body.message
            });
        return res.json({})
    }, 200);
});

app.listen(3000)