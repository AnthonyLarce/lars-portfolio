import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  
  // Find project matching the URL parameter string converted to a number
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist or was removed.</p>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{project.title}</h2>
      <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>{project.description}</p>
      <p>
        <strong>External Link: </strong> 
        <a href={project.link} target="_blank" rel="noreferrer">Repository / Live Demo</a>
      </p>
      <br />
      <Link to="/projects">&larr; Back to All Projects</Link>
    </div>
  );
}