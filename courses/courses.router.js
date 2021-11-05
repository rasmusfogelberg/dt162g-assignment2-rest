/* 
 * This file is the Router of the webservice. I uses Express Router function
 * and depending on the verb and what you put in the URI the router will
 * perform different operations
 * 
 */

import express from 'express';
import { findAll, findSingle, remove } from './courses.service.js';

export const coursesRouter = express.Router();

// Get all courses
coursesRouter.get('/', (req, res) => {
  res.send(findAll());
});

// Get single course
coursesRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const course = findSingle(id);

  // If there is a course on the given ID it will show the course
  if (course) {
    res.send(course);
  }

  // If there is nothing on the id send back 404
  res.status(404).send('Course not found.');
});

// Delete single course
coursesRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  remove(id);

  res.sendStatus(204);
});