import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This is important for handling cookies
});

// Course API endpoints
export const courseApi = {
  // Get all courses
  getCourses: async () => {
    const response = await api.get('/courses');
    return response.data;
  },

  // Get a single course by ID
  getCourseById: async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  // Create a new course
  createCourse: async (courseData: any) => {
    const response = await api.post('/courses/newCourse', courseData);
    return response.data;
  },

  // Update a course
  updateCourse: async (id: string, courseData: any) => {
    const response = await api.put(`/courses/${id}`, courseData);
    return response.data;
  },

  // Delete a course
  deleteCourse: async (id: string) => {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  },
};

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    throw new Error(message);
  }
);

export default api; 