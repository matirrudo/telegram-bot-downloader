require('dotenv').config()
const express = require('express')
const fs = require('fs')
const serveIndex = require('serve-index')
require('./bot')
const app = express()
const PORT = process.env.PORT;
let downloadsFolder = './public/documents'

app.set('port', PORT)

app.use(express.static('public'))
app.use('/resources/', express.static(__dirname + '/public'))
app.use('/resources/documents', serveIndex(__dirname + '/public/documents'))


if (!fs.existsSync(downloadsFolder)){
    fs.mkdirSync(downloadsFolder, { recursive: true });
}

app.listen(app.get('port'), () =>{
    console.log(`server on port ${PORT}`);
})