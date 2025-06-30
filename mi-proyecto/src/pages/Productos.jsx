  import React from 'react';
  import { celulares } from '../data/data';
  import CardCelular from '../components/CardCelular';
  import './Productos.css';
  
  export default function Productos() {
    return (
      <div className="productos-container">
        <h2 className="productos-titulo">Nuestros productos</h2>
        <div className="productos-grid">
          {celulares.map((celular) => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      </div>
    );
  }
  