import React from 'react';
import CategoriesBar from '../../components/CategoriesBar';
import ProductGrid from '../../components/ProductGrid';
import FloatingButtons from '../../components/FloatingButtons';
import CartDrawer from '../../components/CartDrawer';
import { useApp } from '../../context/AppContext'; 

function Catalogo() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 flex flex-col min-h-screen relative overflow-x-hidden">
      
      {/* Encabezado técnico para el catálogo */}
      <header className="pt-10 pb-6 text-center px-4 bg-slate-900">
        <h1 className="text-3xl font-bold font-sans mb-2 text-white">Servicios Ennea Mirror</h1>
        <p className="text-cyan-400">Cotización de piezas 3D y soluciones de desarrollo web</p>
      </header>

      <CategoriesBar />
       
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Aquí se renderizará tu nuevo catalogo.json */}
        <ProductGrid />
      </main>

      <CartDrawer />
      <FloatingButtons />

    </div>
  );
}

export default Catalogo;

