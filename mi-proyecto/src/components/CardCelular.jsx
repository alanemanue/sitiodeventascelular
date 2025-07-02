import { Link } from 'react-router-dom';

export default function CardCelular({ celular }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {}
      <div style={{
  height: '150px',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}}>
  <img 
    src={celular.fotos[0]} 
    alt={celular.nombre}
    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
  />
</div>


      <h3>{celular.nombre}</h3>
      <p>{celular.descripcion}</p>
      <p><strong>${celular.precio}</strong></p>
      <Link to={`/producto/${celular.id}`}>
        <button style={{
          marginTop: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Ver más
        </button>
      </Link>
    </div>
  );
}
