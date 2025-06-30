import { Link } from 'react-router-dom';
import { marcas } from '../data/data';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {marcas.map(marca => (
          <li key={marca.id}>
            <Link to={`/marca/${marca.id}`}>{marca.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
