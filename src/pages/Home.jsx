import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I am an aspiring Application Developer building modern web experiences.</p>
      <Link to="/projects">
        <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>View My Projects</button>
      </Link>
    </div>
  );
}