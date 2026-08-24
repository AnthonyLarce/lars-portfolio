import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '75vh', 
      textAlign: 'center', 
      padding: '0 1rem' 
    }}>
      <span style={{ 
        color: '#38bdf8', 
        backgroundColor: 'rgba(56, 189, 248, 0.1)', 
        padding: '0.35rem 0.85rem', 
        borderRadius: '20px', 
        fontSize: '0.85rem', 
        fontWeight: '500', 
        marginBottom: '1rem' 
      }}>
        Aspiring Application Developer
      </span>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', maxWidth: '700px' }}>
        Building modern, scalable web experiences.
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '550px', marginBottom: '2rem' }}>
        Welcome to my personal portfolio. Explore my projects, code architecture, and professional background.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/projects" style={{
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600',
          boxShadow: '0 4px 14px rgba(56, 189, 248, 0.3)',
          transition: 'transform 0.2s'
        }}>
          View Projects
        </Link>
        <Link to="/contact" style={{
          backgroundColor: 'transparent',
          color: '#f8fafc',
          border: '1px solid #334155',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontWeight: '600'
        }}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}