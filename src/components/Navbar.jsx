import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#38bdf8' : '#94a3b8',
    fontWeight: isActive ? '600' : '400',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
  });

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      borderBottom: '1px solid #334155',
      backgroundColor: '#0f172a',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h3 style={{ fontSize: '1.15rem', letterSpacing: '0.5px' }}>
        <span style={{ color: '#38bdf8' }}>Anthony</span>.dev
      </h3>
      <nav style={{ display: 'flex', gap: '0.5rem' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  );
}