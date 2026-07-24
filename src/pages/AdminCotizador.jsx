import React, { useState } from 'react';

function AdminCotizador() {
  // --- PARÁMETROS FIJOS (Ajusta estos valores según tus costos reales) ---
  const COSTO_KILO_FILAMENTO = 600; // MXN
  const CONSUMO_LUZ_IMPRESORA = 0.25; // kWh por hora (aprox. Ender 3/Prusa/Flashforge)
  const COSTO_KWH = 2.5; // Costo promedio de CFE MXN
  const TASA_DESGASTE_HORA = 2.00; // MXN por hora por depreciación/refacciones
  const COSTO_MANO_OBRA_HORA = 50.00; // MXN (Tu tiempo base de operación, ej. despegar pieza, limpiar cama)

  // --- ESTADO DE ENTRADA ---
  const [gramosFilamento, setGramosFilamento] = useState('');
  const [horasImpresion, setHorasImpresion] = useState('');
  const [minutosImpresion, setMinutosImpresion] = useState('');
  
  const [porcentajeGanancia, setPorcentajeGanancia] = useState('100'); // %
  
  const [costoDiseno, setCostoDiseno] = useState(''); // Lo que cobras por vectorizar/modelar
  const [costoHerrajes, setCostoHerrajes] = useState(''); // Cadenitas, argollas, empaque, etc.

  // --- LÓGICA DE CÁLCULO ---
  const calcularPrecio = () => {
    const gramos = parseFloat(gramosFilamento) || 0;
    
    // Convertimos las horas y minutos a un tiempo decimal total
    const horas = parseFloat(horasImpresion) || 0;
    const minutos = parseFloat(minutosImpresion) || 0;
    const tiempoTotalHoras = horas + (minutos / 60);

    const gananciaMultiple = (parseFloat(porcentajeGanancia) / 100) + 1;
    const extrasDiseno = parseFloat(costoDiseno) || 0;
    const extrasHerrajes = parseFloat(costoHerrajes) || 0;

    // Cálculo de costos directos
    const costoMaterial = (gramos * (COSTO_KILO_FILAMENTO / 1000));
    const costoLuz = tiempoTotalHoras * CONSUMO_LUZ_IMPRESORA * COSTO_KWH;
    const costoDesgaste = tiempoTotalHoras * TASA_DESGASTE_HORA;
    // Asumimos 15 minutos (0.25h) de tu tiempo de operación de la máquina por pieza
    const costoManoObraDirecta = COSTO_MANO_OBRA_HORA * 0.25; 

    const costoTotalProduccion = costoMaterial + costoLuz + costoDesgaste + costoManoObraDirecta;
    const subtotalConGanancia = costoTotalProduccion * gananciaMultiple;
    const precioFinal = subtotalConGanancia + extrasDiseno + extrasHerrajes;

    return {
      material: costoMaterial.toFixed(2),
      energia: costoLuz.toFixed(2),
      produccion: costoTotalProduccion.toFixed(2),
      final: precioFinal.toFixed(2)
    };
  };

  const resultados = calcularPrecio();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Encabezado */}
      <header className="bg-slate-900 py-12 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
            Ennea Mirror Tools
          </span>
          <h1 className="mt-6 text-3xl font-sans font-black text-white">Calculadora Paramétrica 3D</h1>
          <p className="mt-3 text-lg text-slate-300">Generador de precios interno para manufactura FDM.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Panel de Entradas (Izquierda) */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b">1. Datos del Laminador (Orca Slicer)</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Filamento Utilizado (gramos)</label>
                  <input type="number" value={gramosFilamento} onChange={(e) => setGramosFilamento(e.target.value)} placeholder="Ej: 3.83" className="w-full px-5 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tiempo estimado</label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <input type="number" value={horasImpresion} onChange={(e) => setHorasImpresion(e.target.value)} placeholder="Horas" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                    </div>
                    <div className="flex-1">
                      <input type="number" value={minutosImpresion} onChange={(e) => setMinutosImpresion(e.target.value)} placeholder="Minutos" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b">2. Márgenes y Extras</h2>

              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Diseño / Modelado ($)</label>
                  <input type="number" value={costoDiseno} onChange={(e) => setCostoDiseno(e.target.value)} placeholder="Ej: 100" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Herrajes / Empaque ($)</label>
                  <input type="number" value={costoHerrajes} onChange={(e) => setCostoHerrajes(e.target.value)} placeholder="Ej: 5" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ganancia (%)</label>
                  <input type="number" value={porcentajeGanancia} onChange={(e) => setPorcentajeGanancia(e.target.value)} placeholder="Ej: 100" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-lg outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100 transition" />
                </div>
              </div>
            </div>
          </div>

          {/* Panel de Resultados (Derecha) */}
          <div className="bg-slate-900 rounded-3xl shadow-xl p-8 border border-slate-800 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
                    <h3 className="text-xl font-bold text-white">Desglose (Costo)</h3>
                    <i className="fa-solid fa-calculator text-slate-700 text-2xl"></i>
                </div>
                
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between text-slate-400">
                        <span>Costo Filamento</span>
                        <span className="text-white font-mono">${resultados.material} MXN</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                        <span>Costo Energía (CFE)</span>
                        <span className="text-white font-mono">${resultados.energia} MXN</span>
                    </div>
                    <div className="flex justify-between text-cyan-400 font-bold pt-4 border-t border-slate-800/50">
                        <span>Costo Producción (Taller)</span>
                        <span className="font-mono text-xl">${resultados.produccion} MXN</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center">
                <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">Precio Sugerido Final</p>
                <p className="text-5xl font-black text-white tracking-tighter leading-none">${resultados.final}</p>
                <p className="text-sm text-slate-400 mt-2">MXN</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default AdminCotizador;
