export default function ContactUs() {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <div className="contact-methods">
          <section className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </section>
  
          <section className="contact-info">
            <h2>Other Ways to Reach Us</h2>
            <div className="info-item">
              <h3>Email</h3>
              <p>support@learnhub.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Education St, Learning City</p>
            </div>
          </section>
        </div>
      </div>
    );
  }