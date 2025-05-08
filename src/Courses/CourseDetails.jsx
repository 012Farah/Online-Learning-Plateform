import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Courses.css'; // Import the CSS file

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate(); // Hook to navigate back

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    // Add the course to the cart logic (this can be customized based on your cart management)
    console.log('Course added to cart:', course);
    alert(`${course.title} added to cart!`);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-details">
      <img src={course.thumbnail} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <strong>Price: ${course.price}</strong>

      <div className="buttons">
        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;



