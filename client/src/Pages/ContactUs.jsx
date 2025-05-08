export default function ContactUs() {
    return (
      <>
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

      
      <section className="team-section">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.7769743560243!2d29.953209025316617!3d31.226907761583934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4eb818bb859%3A0xe4b28ff2fa922b23!2sSkills%20Dynamix!5e0!3m2!1sar!2seg!4v1745428493767!5m2!1sar!2seg" width="100%"
       height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 
      </section>
     

      </>
    );
  }