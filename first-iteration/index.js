const express = require('express')
const app = express()

app.post('/api/notifications', (req, res) => {

    //return res.json(messages[req.param("userId")])
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))