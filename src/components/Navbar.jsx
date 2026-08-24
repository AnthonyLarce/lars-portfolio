import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = ({ isActive }) => ({
    marginRight: '1rem',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black',
  });

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/about" style={navStyle}>About</NavLink>
      <NavLink to="/projects" style={navStyle}>Projects</NavLink>
      <NavLink to="/contact" style={navStyle}>Contact</NavLink>
    </nav>
  );
}