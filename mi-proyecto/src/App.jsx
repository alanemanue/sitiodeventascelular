import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';
import Home from './pages/home';
import QuienesSomos from './pages/quienessomos';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import ProductosPorMarca from './pages/ProductosPorMarca';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/marca/:idMarca" element={<Productos />} />
          <Route path="producto/:idCelular" element={<ProductoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="marca/:marcaId" element={<ProductosPorMarca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
