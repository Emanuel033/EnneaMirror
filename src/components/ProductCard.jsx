import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

function ProductCard({ product }) {
  const { agregarAlCarrito } = useApp();
  const [zoomOpen, setZoomOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    agregarAlCarrito(product, cantidad);
    setCantidad(1);
  };

  // Imagen por defecto por si no has subido fotos de tus piezas aún
  const imagenMostrar = product.image || 'https://via.placeholder.com/300/f8fafc/0f172a?text=Ennea+Mirror';

  return (
    <>
      {/* LIGHTBOX (Vista Ampliada) */}
      {zoomOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setZoomOpen(false)}>
          <div className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white">
              <h3 className="font-bold font-sans text-slate-900 text-lg truncate pr-4">{product.titulo}</h3>
              <button onClick={() => setZoomOpen(false)} className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-8 flex justify-center bg-white cursor-zoom-out" onClick={() => setZoomOpen(false)}>
              <img src={imagenMostrar} alt={product.titulo} className="w-full max-h-[40vh] object-cover rounded-xl shadow-sm" />
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-white">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-[10px] font-black text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full">{product.categoria}</span>
                 <span className="text-xl font-black text-slate-900">${product.precio} MXN</span>
               </div>
               {product.descripcion && (
                 <p className="text-sm text-slate-600 mb-6">{product.descripcion}</p>
               )}
               <button onClick={() => { handleAdd(); setZoomOpen(false); }} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                 <i className="fas fa-plus"></i> Añadir a Cotización
               </button>
            </div>
          </div>
        </div>
      )}

      {/* TARJETA NORMAL */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-200 flex flex-col relative group transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        
        <div className="relative aspect-square w-full p-4 cursor-zoom-in overflow-hidden bg-white flex items-center justify-center" onClick={() => setZoomOpen(true)}>
          <img
            src={imagenMostrar}
            alt={product.titulo}
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col flex-1 bg-white border-t border-slate-100">
          <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1">{product.categoria}</span>
          <h3 className="font-bold font-sans text-[14px] text-slate-900 mb-1 leading-snug line-clamp-2">{product.titulo}</h3>
          <p className="text-slate-900 font-black text-sm mb-4">${product.precio} MXN</p>
          
          <div className="flex items-center gap-2 mt-auto">
            <div className="flex items-center bg-slate-50 rounded-lg px-2 py-1 border border-slate-200">
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="px-2 text-slate-500 font-bold hover:text-cyan-600">-</button>
              <span className="w-6 text-center text-xs font-bold text-slate-900">{cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)} className="px-2 text-slate-500 font-bold hover:text-cyan-600">+</button>
            </div>
            <button onClick={handleAdd} className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg font-semibold text-xs shadow-sm transition-all active:scale-95">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
