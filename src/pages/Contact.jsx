export default function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! (Simulated submission)');
    };
  
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '1rem', marginTop: '1rem' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.5rem' }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.5rem' }} />
          <textarea placeholder="Your Message" rows="4" required style={{ padding: '0.5rem' }}></textarea>
          <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>
    );
  }