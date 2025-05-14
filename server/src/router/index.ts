import express from 'express';
import authntecation from './authntecation';    
import users from './users';
import courses from './courses';

const router = express.Router();

export default () => {
    authntecation(router);
    users(router);
    router.use('/courses', courses);
    return router;
};
