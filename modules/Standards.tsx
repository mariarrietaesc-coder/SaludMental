import React, { useState } from 'react';
import { Card, Badge, Quiz, Accordion, Callout } from '../components/UI';
import { Wind, Coffee, Moon, Shield, CheckCircle, ArrowLeft, ArrowRight, LayoutGrid, Leaf, Users } from 'lucide-react';
import { QuizState } from '../types';

const SECTIONS = [
  { id: 'afrontar', label: 'Formas de afrontar', icon: Shield, desc: 'Estrategias que ayudan y las que no.' },
  { id: 'tecnicas', label: 'Técnicas prácticas', icon: Wind, desc: 'Herramientas para el día a día.' },
  { id: 'habitos', label: 'Hábitos de autocuidado', icon: Leaf, desc: 'Pequeños cambios sostenibles.' },
  { id: 'quiz', label: 'Evaluación', icon: CheckCircle, desc: 'Cierre del Módulo 3.' }
];

export const StandardsModule: React.FC<{ onComplete: any, onTimeUpdate: any, saveProgress: any, data: QuizState }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const nextSection = SECTIONS[currentIndex + 1];
  const prevSection = SECTIONS[currentIndex - 1];
  const navigateTo = (id: string) => { setActiveTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (activeTab === 'menu') {
    return (
      <div className="space-y-12 animate-fade-in pb-20">
        <div className="border-b border-slate-200 dark:border-slate-700 pb-12">
          <Badge type="brand" className="mb-4">Módulo 3</Badge>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">Afrontamiento</h1>
          <p className="text-slate-500 font-medium text-lg mt-4">Estrategias y hábitos para manejar el estrés y cuidarnos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTIONS.map((section, i) => {
            const Icon = section.icon;
            return (
              <button key={section.id} onClick={() => navigateTo(section.id)} className="group p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] border-2 transition-all text-left shadow-xl hover:border-brand-500 border-transparent active:scale-95">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-brand-50 text-brand-600"><Icon size={26} /></div>
                  <span className="text-[9px] font-bold text-slate-300 tracking-wider">Sección 0{i + 1}</span>
                </div>
                <h3 className="font-black text-2xl text-slate-900 dark:text-white mb-2 leading-tight tracking-tighter">{section.label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-snug">{section.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-32 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md py-4 z-40 border-b border-slate-200 dark:border-slate-700 px-2">
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab('menu')} className="p-2 hover:bg-brand-50 rounded-xl text-brand-600 transition-colors"><LayoutGrid size={24} /></button>
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Módulo 3 - {SECTIONS[currentIndex].label}</h2>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentIndex + 1} / {SECTIONS.length}</div>
      </div>

      <main className="min-h-[60vh] px-2 md:px-0">
        {activeTab === 'afrontar' && (
          <div className="space-y-8">
            <Card title="No todas las salidas ayudan" className="border-l-8 border-brand-500 !rounded-[2.5rem]">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                Afrontar es lo que hacemos para manejar lo que nos abruma. Algunas estrategias alivian de verdad; otras dan calma momentánea pero empeoran las cosas a la larga.
              </p>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/40">
                <h4 className="text-emerald-700 dark:text-emerald-400 font-black text-sm mb-4 uppercase tracking-widest">Saludables</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Hablar con alguien de confianza</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Organizar y priorizar tareas</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Moverse, dormir y descansar</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Poner límites y pedir ayuda</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-[2.5rem] border border-red-100 dark:border-red-900/40">
                <h4 className="text-red-700 dark:text-red-400 font-black text-sm mb-4 uppercase tracking-widest">Que pasan factura</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Aislarse y guardarse todo</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Abusar de café, alcohol o pantallas</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Trabajar sin parar ("ya descanso luego")</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Negar lo que sentimos</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tecnicas' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Wind, t: 'Respiración 4-4-6', d: 'Inhala 4 segundos, sostén 4, exhala 6. Repite un minuto. Baja la activación del cuerpo casi de inmediato.' },
                { icon: Coffee, t: 'Pausas activas', d: 'Cada 60–90 minutos, levántate, estira y mira lejos de la pantalla 2 minutos. Previene la fatiga acumulada.' },
                { icon: Moon, t: 'Higiene del sueño', d: 'Horarios regulares, menos pantallas antes de dormir. El sueño es el principal reparador del estrés.' }
              ].map(t => (
                <div key={t.t} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl">
                  <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4"><t.icon size={24} /></div>
                  <h4 className="font-black text-slate-800 dark:text-white text-lg mb-2">{t.t}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.d}</p>
                </div>
              ))}
            </div>
            <Callout type="info">Prueba una técnica a la vez durante unos días. Lo que funciona es lo que logras sostener, no lo más sofisticado.</Callout>
          </div>
        )}

        {activeTab === 'habitos' && (
          <div className="space-y-4">
            <Accordion title="Poner límites al trabajo" defaultOpen>
              <p>Definir un horario de desconexión y respetarlo. Responder mensajes fuera de hora de forma excepcional, no como norma.</p>
            </Accordion>
            <Accordion title="Conexión con otros">
              <p>Cultivar relaciones de apoyo dentro y fuera del trabajo. El acompañamiento es uno de los mayores protectores de la salud mental.</p>
            </Accordion>
            <Accordion title="Movimiento y naturaleza">
              <p>Caminar, moverse o pasar tiempo al aire libre, aunque sea poco. El cuerpo y la mente se regulan juntos.</p>
            </Accordion>
            <Accordion title="Momentos de pausa consciente">
              <p>Reservar pequeños espacios sin productividad: música, respiración, un café tranquilo. Recargan más de lo que parece.</p>
            </Accordion>
          </div>
        )}

        {activeTab === 'quiz' && (
          <Quiz
            questions={[
              { id: 1, question: "Una estrategia de afrontamiento saludable es:", options: ["Aislarse y guardarse todo", "Hablar con alguien de confianza y pedir ayuda", "Trabajar sin parar"], correctAnswer: 1 },
              { id: 2, question: "La técnica de respiración propuesta consiste en:", options: ["Inhalar 4, sostener 4, exhalar 6", "Contener la respiración un minuto", "Respirar lo más rápido posible"], correctAnswer: 0 },
              { id: 3, question: "Respecto a los hábitos de autocuidado, lo más importante es:", options: ["Que sean muy exigentes", "Que se puedan sostener en el tiempo", "Hacerlos todos a la vez"], correctAnswer: 1 }
            ]}
            onComplete={onComplete}
          />
        )}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-40">
        <div className="bg-slate-900 dark:bg-slate-800 text-white p-2 rounded-full shadow-2xl flex items-center justify-between border border-white/10">
          {prevSection ? (
            <button onClick={() => navigateTo(prevSection.id)} className="p-4 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2" title="Anterior"><ArrowLeft size={20} /></button>
          ) : <div className="w-12"></div>}
          <button onClick={() => navigateTo('menu')} className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><LayoutGrid size={20} /></button>
          {nextSection && (
            <button onClick={() => navigateTo(nextSection.id)} className="p-4 pl-6 pr-6 bg-brand-600 hover:bg-brand-500 rounded-full transition-all flex items-center gap-3 text-sm font-bold tracking-tighter">
              <span>{nextSection.id === 'quiz' ? 'Examen' : nextSection.label}</span>
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
