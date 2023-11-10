// IMPORTS
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');

// other js files imports
const db = require('./db');
const Controller = require('./src/controller');

// CREATE NEW INSTANCE
const app = express();
const httpServer = http.createServer(app);

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.use(cors({
    origin: '*'
}));


//login
app.post('/login',Controller.login)

// get all mood
app.get('/',Controller.getMood)

// update Mood
app.post('/updateMood',Controller.updateMood)


const PORT = process.env.PORT || 8080;

// LISTEN ON PORT
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} PORT`);
});
