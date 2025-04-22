

export default function AboutUs() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>Welcome to LearnHub</h1>
        <p>Your gateway to world-class online education</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At LearnHub, we believe education should be accessible, engaging, and 
          transformative. We're committed to breaking down barriers to learning by 
          providing high-quality courses from top instructors around the world.
        </p>
      </section>

      <section className="features-section">
        <h2>Why Choose LearnHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and academic leaders.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Content</h3>
            <p>Engaging videos, quizzes, and hands-on projects.</p>
          </div>
          <div className="feature-card">
            <h3>Certification</h3>
            <p>Earn recognized certificates upon completion.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50,000+</span>
            <span className="stat-label">Students Enrolled</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Courses Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Countries Reached</span>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our diverse team of educators, technologists, and learning specialists 
          work tirelessly to create the best online learning experience.
        </p>
      </section>
    </div>
  );
}