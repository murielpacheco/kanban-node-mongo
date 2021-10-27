const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const connectToDatabase = require('./database');
const cors = require('cors');
connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Backend running at http://localhost:3000'));
