// src/components/Courses.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Courses.css';


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setCourses(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={course.thumbnail} alt={course.title} className="course-img" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description.substring(0, 60)}...</p>
              <span className="price">${course.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
