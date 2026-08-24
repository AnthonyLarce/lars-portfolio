import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>
              <button style={{ cursor: 'pointer' }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}