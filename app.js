const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');

const cors = require('cors')



const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);



app.listen(4500);