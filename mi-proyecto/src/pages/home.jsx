import { Link } from 'react-router-dom';
import './Home.css';


export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bienvenido al sitio de celulares</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Descubrí los últimos modelos de celulares de tus marcas favoritas. Tecnología de punta a tu alcance.
      </p>


      <Link to="/productos">
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer'
        }}>
          Ver productos
        </button>
      </Link>

      {}
      <div style={{ marginTop: '3rem' }}>
        <img
          src="mi-proyecto\public\iphone-15-ea18831396f959b2a316968119891232-1024-1024.jpg"
          alt="Celular destacado"
          style={{ maxWidth: '100%', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
}
