import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';

export default function ProductosPorMarca() {
  const { marcaId } = useParams();
  const idNumerico = parseInt(marcaId, 10);

  const marca = marcas.find(m => m.id === idNumerico);
  const celularesFiltrados = celulares.filter(c => c.marcaId === idNumerico);

  if (!marca) {
    return <h2>Marca no encontrada</h2>;
  }

  return (
    <div>
      <h2>Productos de {marca.nombre}</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {celularesFiltrados.length === 0 ? (
          <p>No hay celulares disponibles para esta marca.</p>
        ) : (
          celularesFiltrados.map(cel => (
            <CardCelular key={cel.id} celular={cel} />
          ))
        )}
      </div>
    </div>
  );
}
