const express = require('express')
const bodyParser = require('body-parser')
const got = require("got");
const oidc = require('oidc');
const messageTypes = require('./messageTypes');
const {logger, middleware: loggingMiddleware} = require("./logging");
const {middleware: authMiddleware} = require("./auth");
const {middleware: metricsMiddleware} = require("./monitoring");
const app = express()
app.use(bodyParser.json())
app.use(metricsMiddleware);

async function fetchUserDetails(userId){
    const res =  await got(`http://users/api/users/${userId}`, {json:true});
    return res.body;
}

async function sendMessage(user, message){
    await got.post(`http://messages/api/users/${userId}/messages`, {body: {message}, json:true});
}

function formatMessage(messageType, context){
    return messageTypes[messageType](context);
}

app.post('/api/notifications', metricsMiddleware, oidcMiddleware.auth(), async (req, res) => {
    const {user, messageType} = req.body;
    try{
        const {name} = await fetchUserDetails(user);
        const message = formatMessage(messageType, {name});    
    } catch (e){
        logger.error({message:"failed to send notification", error: e });
        res.sendStatus(500);
    }
    return res.sendStatus(200);
});

app.listen(3000, () => console.log('Waiting for notification requests'))