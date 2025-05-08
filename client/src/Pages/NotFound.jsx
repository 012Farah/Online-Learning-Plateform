import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-white"> {/* الخلفية أبيض */}
      <div className="text-center">
        <h1 className="display-1 fw-bold text-dark">404</h1> {/* الخط أسود */}
        <p className="fs-3">Page Not Found</p>
        <p className="lead text-muted mb-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
        
      </p>
        <Link to="/" className="btn btn-dark btn-lg text-white"> {/* الزرار أسود والكلام أبيض */}
back to homepage        </Link>
      </div>
    </div>
  );
}

export default NotFound;