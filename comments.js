//create web server
const express = require('express');
const app = express();
//parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//allow cross-origin requests
const cors = require('cors');
app.use(cors());
//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');
//create schema
const commentSchema = new mongoose.Schema({
  text: String,
