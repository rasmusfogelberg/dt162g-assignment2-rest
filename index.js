/* 
 * This is the main file for the web service. It uses express and  
 * imports everything from other js-files for the web service to work
 * 
 */

import express from 'express';
import cors from 'cors';

import { coursesRouter } from './courses/courses.router.js';

// Setting the imported express to the variable app
const app = express();

// Port for localhost set to 3000
const port = 3000;

// Using cors to allow all requests from a client
app.use(cors());
app.use('/courses', coursesRouter);

// When server is started it will print this message in the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});