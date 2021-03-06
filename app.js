const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
var passport = require('passport')
require('dotenv').config();

const employeeRouter = require('./routes/employee');
//connecting to database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

app.use(bodyParser.json());




// CORS Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '/')));
app.use(passport.initialize());
//app.use(passport.session());
require('./config/passport')(passport)
app.use('/api/employee', employeeRouter);
module.exports = app;