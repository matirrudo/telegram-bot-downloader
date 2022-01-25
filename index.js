require('dotenv').config()
const express = require('express')
const serveIndex = require('serve-index')
require('./bot')
const app = express()
const PORT = process.env.PORT;
app.set('port', PORT)

app.use(express.static('public'))
app.use('/resources/', express.static(__dirname + '/public'))
app.use('/resources/documents', serveIndex(__dirname + '/public/documents'))

app.listen(app.get('port'), () =>{
    console.log(`server on port ${PORT}`);
})