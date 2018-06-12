const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const got = require("got");
const messageTypes = require('./messageTypes');
const app = express()

app.use(cors())
app.use(bodyParser.json())

async function fetchUserDetails(userId){
    const res = await got(`http://users/api/users/${userId}`, {json:true});
    return res.body;
}

async function sendMessage(userId, message){
    await got.post(`http://messages/api/users/${userId}/messages`, {body: {message}, json:true});
}

function formatMessage(messageType, context){
    return messageTypes[messageType](context);
}


app.post('/api/notifications',  async (req, res) => {
    const {user, messageType} = req.body;
    try{
        const {name} = await fetchUserDetails(user);
        const message = formatMessage(messageType, {name});
        await sendMessage(user, message); 
    } catch (e){
        console.error({message:"failed to send notification", error: e });
        return res.status(500).send("failed to send notification");
    }
    return res.send(200);
});

app.listen(3000, () => console.log('Waiting for notification requests'))