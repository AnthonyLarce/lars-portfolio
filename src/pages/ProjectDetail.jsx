import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ textAlign: 'center', marginTop: '6rem' }}>
        <h2>Project Not Found</h2>
        <p style={{ color: '#94a3b8', margin: '1rem 0' }}>The project you requested does not exist.</p>
        <Link to="/projects" style={{ color: '#38bdf8' }}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '4rem auto', padding: '0 2rem' }}>
      <Link to="/projects" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-block', marginBottom: '1.5rem' }}>
        &larr; Back to Projects
      </Link>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{project.title}</h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
        {project.description}
      </p>
      <a href={project.link} target="_blank" rel="noreferrer" style={{
        backgroundColor: '#38bdf8',
        color: '#0f172a',
        padding: '0.65rem 1.25rem',
        borderRadius: '6px',
        fontWeight: '600',
        display: 'inline-block'
      }}>
        View Source Repository
      </a>
    </div>
  );
}