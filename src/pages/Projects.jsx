import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Featured Projects</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Here are a few application development works and practice projects I've built.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'border-color 0.2s'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#f8fafc' }}>{project.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{project.description}</p>
            </div>
            <Link to={`/projects/${project.id}`} style={{
              color: '#38bdf8',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItem: 'center',
              gap: '0.25rem'
            }}>
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}