import express from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from '../controllers/courses';

const router = express.Router();

// Create a new course
router.post('/newCourse', createCourse);

// Get all courses
router.get('/', getCourses);

// Get a single course by ID
router.get('/:id', getCourseById);

// Update a course
router.put('/:id', updateCourse);

// Delete a course
router.delete('/:id', deleteCourse);

export default router; 