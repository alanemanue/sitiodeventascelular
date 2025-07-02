import { Link } from 'react-router-dom';
import { marcas } from '../data/data';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav>
      <ul style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none',
        padding: 0
      }}>
        {}
        <li><Link to="/" className="nav-button">Home</Link></li>
        <li><Link to="/contacto" className="nav-button">Contacto</Link></li>
        <li><Link to="/quienessomos" className="nav-button">Quiénes Somos</Link></li>

        {}
        {marcas.map(marca => (
          <li key={marca.id}>
            <Link to={`/marca/${marca.id}`} className="nav-button">
              {marca.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}