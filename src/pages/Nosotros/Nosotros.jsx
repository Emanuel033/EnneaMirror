import React from 'react';

function Nosotros() {
  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Encabezado / Hero */}
      <header className="bg-slate-900 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] bg-slate-800 border border-slate-700 px-4 py-1.5 rounded-full shadow-sm">
            Sobre Nosotros
          </span>
          <h1 className="mt-8 text-4xl md:text-5xl font-sans font-bold text-white leading-tight">
            Ennea Mirror
          </h1>
          <p className="mt-6 text-xl text-slate-300 font-medium">
            "Donde el código toma forma."
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* Sección Historia con el Logo Nuevo */}
        <section className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            <div className="w-full md:w-1/3 flex justify-center">
              {/* Aquí apunta a tu logo recién movido a la carpeta public/iconos */}
              <img 
                src="/iconos/logo-512.png" 
                alt="Logo Ennea Mirror" 
                className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-md transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-48 h-48 bg-cyan-50 rounded-full items-center justify-center text-cyan-600 text-6xl shadow-inner">
                <i className="fa-solid fa-microchip"></i>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-sans font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Ennea Mirror surge de la intersección entre la ingeniería de software y la manufactura física. Con una sólida base en el análisis de sistemas, la gestión de bases de datos y la automatización de flujos de trabajo, el proyecto evolucionó al descubrir el potencial de llevar el diseño digital al mundo real.
                </p>
                <p>
                  Lo que comenzó como una optimización de código y despliegue de interfaces en entornos móviles, pronto se fusionó con la precisión de la impresión 3D. Hoy, Ennea Mirror representa la capacidad de diseñar una solución de software robusta y, al mismo tiempo, fabricar piezas y prototipos personalizados con precisión milimétrica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Filosofía (Estilo Cita) */}
        <section className="bg-slate-900 rounded-3xl shadow-lg p-8 md:p-14 text-center mb-12 relative overflow-hidden">
          <i className="fa-solid fa-quote-left absolute top-6 left-8 text-6xl text-white opacity-5"></i>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-6">
            Nuestra Filosofía
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
            <p>
              Creemos que la tecnología debe ser accesible, escalable y, sobre todo, funcional. Ya sea estructurando el frontend de una aplicación web o configurando los parámetros de laminado para una extrusión perfecta, la atención al detalle lo es todo.
            </p>
            <p>
              No vemos barreras entre el software y el hardware; vemos un ecosistema continuo. Escribimos código limpio para asegurar el rendimiento en la nube y calibramos nuestra maquinaria para garantizar resistencia y calidad en cada filamento depositado.
            </p>
            <p className="text-cyan-400 font-bold text-xl pt-4 border-t border-slate-700">
              Transformamos la lógica pura en herramientas tangibles.
            </p>
          </div>
          <i className="fa-solid fa-quote-right absolute bottom-6 right-8 text-6xl text-white opacity-5"></i>
        </section>

        {/* Sección Misión y Visión */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 text-2xl mb-6">
              <i className="fa-solid fa-server"></i>
            </div>
            <h3 className="text-2xl font-sans font-bold text-slate-900 mb-4">Misión</h3>
            <p className="text-slate-600 leading-relaxed">
              Brindar soluciones tecnológicas integrales, desde el despliegue de sitios web responsivos y eficientes, hasta la manufactura de piezas impresas en 3D bajo demanda. Nos enfocamos en resolver problemas reales mediante la automatización y el diseño paramétrico.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 text-2xl mb-6">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3 className="text-2xl font-sans font-bold text-slate-900 mb-4">Visión</h3>
            <p className="text-slate-600 leading-relaxed">
              Posicionar a Ennea Mirror como un referente en la creación ágil de herramientas digitales y físicas. Aspiramos a ser el puente confiable para emprendedores e ingenieros que necesitan materializar sus ideas, ya sea alojándolas en un servidor o imprimiéndolas capa por capa.
            </p>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Nosotros;
