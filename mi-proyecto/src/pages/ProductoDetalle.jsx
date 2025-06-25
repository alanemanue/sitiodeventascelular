import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const id = parseInt(idCelular, 10);

  const celular = celulares.find(c => c.id === id);

  if (!celular) {
    return <h2>Producto no encontrado</h2>;
  }

  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div>
      <h2>{celular.nombre}</h2>
      <p><strong>Marca:</strong> {marca ? marca.nombre : 'Desconocida'}</p>
      <p><strong>Descripción:</strong> {celular.descripcion}</p>
      <p><strong>Precio:</strong> ${celular.precio}</p>

      {}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {celular.fotos.map((foto, index) => (
          <div key={index} style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span>Foto {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
