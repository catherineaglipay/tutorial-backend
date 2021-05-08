const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');

var app                 = express();
var studentRouter      = require('./routes/student_router')

app.use(cors());

var urlencodedParser    = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// test route
app.use("/parent-route", studentRouter)

app.listen(3000, () => console.log('Express server is running at port no : 3000'));