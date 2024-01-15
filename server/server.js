const express = require('express');
const bodyParser = require('body-parser');//BODY PARSER IS THE MIDDLEWARE TO HANDLE FORM DATA
const cors = require('cors');//CORS IS A PACKAGE TO MAKE REQUEST ON DIFFERENT PORTS

//let create a port that express server run on
const PORT = 3000
//CREATE AN INSTANCE  OF EXPRESS
const app = express();
//specify body parser to handle json data
app.use(bodyParser.json());
//we need to use cors package
app.use(cors());
//code to test get request
app.get('/', function (_req, res) {
    res.send("Hello from server");
})

app.post('/enroll', function (req, res) {
    console.log(req.body);
    res.status(200).send({ "message": "Data Received" })
    //To deal wih error handling change to 401 from 200
})

app.listen(PORT, function () {
    console.log("Server running on the local host : " + PORT);
})

//to run this code use node server--->cd server----->node server