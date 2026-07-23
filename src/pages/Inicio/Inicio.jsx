import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Sección Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center relative z-10">
          <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4 bg-slate-800 px-4 py-1 rounded-full shadow-sm border border-slate-700">
            Estudio de Desarrollo y Manufactura
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 leading-tight">
            Ideas digitales transformadas en <br className="hidden md:block"/> soluciones tangibles.
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl font-medium">
            Servicios especializados en impresión 3D de alta precisión y desarrollo de aplicaciones web optimizadas. Desde el código hasta la pieza final.
          </p>
          <Link 
            to="/catalogo" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
          >
            <i className="fa-solid fa-layer-group"></i> Ver Servicios
          </Link>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 text-slate-800 opacity-50 text-6xl transform -rotate-12">
          <i className="fa-solid fa-cube"></i>
        </div>
        <div className="absolute bottom-10 right-10 text-slate-800 opacity-50 text-6xl transform rotate-12">
          <i className="fa-solid fa-code"></i>
        </div>
      </section>

      {/* Sección de Especialidades */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-sans text-slate-900 mb-4">Nuestras Especialidades</h2>
            <p className="text-slate-500">Ingeniería, precisión y código en cada proyecto.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Tarjeta 1: Impresión 3D */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 shrink-0 bg-cyan-50 rounded-full flex items-center justify-center text-5xl text-cyan-600 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-print"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Manufactura Digital</h3>
                <p className="text-slate-600 mb-4">Prototipado rápido, refacciones y piezas personalizadas mediante impresión 3D FDM. Archivos optimizados capa por capa.</p>
                <Link to="/catalogo" className="text-sm font-bold text-cyan-600 hover:text-cyan-800 uppercase tracking-wide">
                  Cotizar pieza <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            {/* Tarjeta 2: Desarrollo Web */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 shrink-0 bg-cyan-50 rounded-full flex items-center justify-center text-5xl text-cyan-600 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Desarrollo de Software</h3>
                <p className="text-slate-600 mb-4">Creación de interfaces web modernas, gestión de bases de datos y automatización de flujos de trabajo para tu negocio.</p>
                <Link to="/catalogo" className="text-sm font-bold text-cyan-600 hover:text-cyan-800 uppercase tracking-wide">
                  Ver portafolio <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Inicio;

