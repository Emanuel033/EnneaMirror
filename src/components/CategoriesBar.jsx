import React from 'react';
import { useApp } from '../context/AppContext';

function CategoriesBar() {
  const { categorias, categoriaActiva, seleccionarCategoria } = useApp();

  const getCategoryIcon = (cat) => {
    const c = cat.toLowerCase();
    if(c.includes('manufactura') || c.includes('3d')) return <i className="fa-solid fa-cube opacity-70"></i>;
    if(c.includes('web') || c.includes('software')) return <i className="fa-solid fa-laptop-code opacity-70"></i>;
    return <i className="fa-solid fa-border-all opacity-70"></i>;
  };

  return (
    <div className="bg-white border-b border-slate-200 sticky top-[68px] z-30 shadow-sm" id="categories-bar">
      <div className="max-w-7xl mx-auto px-4">
        <div id="categories-container" className="flex gap-1 overflow-x-auto hide-scroll pt-2">
          {categorias.map((cat, idx) => {
            const isActive = categoriaActiva === cat;
            return (
              <button 
                key={idx}
                onClick={() => seleccionarCategoria(cat)}
                className={`shrink-0 px-4 py-2.5 flex items-center gap-2 text-[13px] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  isActive 
                    ? 'border-cyan-600 text-cyan-700 bg-cyan-50/50' 
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {getCategoryIcon(cat)} {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;

