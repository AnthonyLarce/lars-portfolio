export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Message sent.');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '4rem auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Get in Touch</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Have a question or want to work together? Drop a message below.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Name</label>
          <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Email</label>
          <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Message</label>
          <textarea rows="4" required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc' }}></textarea>
        </div>
        <button type="submit" style={{
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          padding: '0.75rem',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer',
          border: 'none',
          marginTop: '0.5rem'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}