require('dotenv').config();
global.Promise = require('bluebird');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewsRouter = require('./routes/reviews');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/reviews', reviewsRouter);


app.listen(3001, () => console.log('Node.js running on 3001!'));
