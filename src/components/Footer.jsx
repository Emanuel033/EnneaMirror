import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-2xl font-sans font-bold text-white mb-4">Ennea Mirror</h3>
            <p className="text-cyan-400 italic mb-4">"Donde el código toma forma."</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Estudio de desarrollo web optimizado y servicios de manufactura digital en impresión 3D.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Ingeniería y Precisión</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Integramos soluciones de software en la nube con la fabricación física de piezas parametrizadas. Diseño lógico para el mundo digital, deposición de filamento para el mundo real.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Explora</h4>
            <ul className="space-y-2 mb-6 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link></li>
              <li><Link to="/catalogo" className="hover:text-cyan-400 transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-cyan-400 transition-colors">Nuestra Historia</Link></li>
            </ul>
            
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-cyan-400 text-white transition-transform hover:scale-110">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 text-white transition-transform hover:scale-110">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 text-white transition-transform hover:scale-110">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ennea Mirror. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
