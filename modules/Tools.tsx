import React from 'react';
import { Card, Badge, Callout } from '../components/UI';
import { Phone, LifeBuoy, AlertCircle, HeartHandshake } from 'lucide-react';

export const ToolsModule: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div className="mb-2">
        <Badge type="brand">Recursos</Badge>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tighter">Recursos y rutas de apoyo</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mt-2">Dónde buscar ayuda y cómo saber cuándo dar el paso.</p>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-[2rem] border border-amber-100 dark:border-amber-900/40 flex gap-4">
        <AlertCircle className="text-amber-600 shrink-0 mt-1" />
        <p className="text-sm text-amber-900 dark:text-amber-300 leading-relaxed font-medium">
          <b>Contenido demostrativo con fines educativos.</b> No sustituye la atención de un profesional de la salud. En la versión final, las líneas y rutas se personalizan con la EPS, ARL y los canales oficiales de cada organización. En una emergencia, comunícate con la <b>línea de emergencias 123</b>.
        </p>
      </div>

      <Card title="Cuándo buscar ayuda profesional">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Considera buscar acompañamiento si, durante <b>dos semanas o más</b>, notas varias de estas situaciones:</p>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
          {[
            'El malestar interfiere con tu trabajo o tu vida diaria',
            'Cambios sostenidos en el sueño o el apetito',
            'Tristeza, ansiedad o irritabilidad que no ceden',
            'Pérdida de interés en cosas que antes disfrutabas',
            'Sensación de no poder más o de estar sobrepasado',
            'Aislamiento de las personas cercanas'
          ].map(s => (
            <li key={s} className="flex gap-2 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
              <span className="text-brand-500">•</span>{s}
            </li>
          ))}
        </ul>
        <Callout type="info">Buscar ayuda a tiempo no es exagerar: es justo lo que evita que un malestar se vuelva más grande.</Callout>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Phone, t: 'Líneas de apoyo', d: 'Líneas de atención psicológica de tu ciudad o EPS. (Configurable por organización.)' },
          { icon: HeartHandshake, t: 'EPS y ARL', d: 'Tu EPS ofrece atención en salud mental; la ARL acompaña riesgos psicosociales en el trabajo.' },
          { icon: LifeBuoy, t: 'Talento Humano / Bienestar', d: 'El área de bienestar puede orientarte sobre rutas internas y apoyos disponibles.' }
        ].map(r => (
          <div key={r.t} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4"><r.icon size={24} /></div>
            <h4 className="font-black text-slate-800 dark:text-white text-lg mb-2">{r.t}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] text-center shadow-2xl">
        <HeartHandshake size={40} className="mx-auto text-brand-400 mb-4" />
        <p className="text-lg font-medium leading-relaxed max-w-2xl mx-auto">Pedir ayuda es un acto de cuidado. Hablar con alguien de confianza es siempre un buen primer paso.</p>
      </div>
    </div>
  );
};
