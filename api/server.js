import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

import taskRouter from './router.js';
import { connectDB } from './src/config/dbConfig.js';
import cors from 'cors';
import morgan from 'morgan';

import path from 'path';
const __dirname = path.resolve();
app.use(express.static(__dirname + '/build'));
// DB connect
connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/task', taskRouter);

app.get('/', (req, res) => {
  res.json({
    message: 'server is running normal',
  });
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
