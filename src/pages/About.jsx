export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
      <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginBottom: '2rem' }}>
        I am a dedicated student pursuing a Bachelor of Science in Computer Science, passionate about writing efficient code, database management, and building interactive web systems.
      </p>
      
      <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#38bdf8' }}>Technical Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'SQL & Database Management', 'Git & GitHub', 'Client-Side Routing'].map((skill, index) => (
          <span key={index} style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            color: '#f8fafc',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            fontSize: '0.9rem'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}