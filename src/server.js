import 'dotenv/config';
import express from 'express';
import { routes } from './routes.js';
import mongoose from 'mongoose';
import { connectToDatabase } from './database.js';

connectToDatabase();

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});
