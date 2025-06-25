import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setEnviado(true);
  }

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Contacto</h2>
      {enviado ? (
        <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:<br />
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </label>

          <label>
            Email:<br />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </label>

          <label>
            Mensaje:<br />
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </label>

          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
