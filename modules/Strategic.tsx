import React, { useState } from 'react';
import { Card, Badge, Quiz, Accordion, Callout } from '../components/UI';
import { Brain, HeartPulse, Info, CheckCircle, ArrowLeft, ArrowRight, LayoutGrid, Sparkles, Users } from 'lucide-react';
import { QuizState } from '../types';

const SECTIONS = [
  { id: 'que-es', label: '¿Qué es?', icon: Brain, desc: 'Salud mental en el entorno laboral.' },
  { id: 'importancia', label: 'Por qué importa', icon: HeartPulse, desc: 'Impacto en las personas y los equipos.' },
  { id: 'mitos', label: 'Mitos y realidades', icon: Info, desc: 'Derribando ideas equivocadas.' },
  { id: 'quiz', label: 'Evaluación', icon: CheckCircle, desc: 'Cierre del Módulo 1.' }
];

export const StrategicModule: React.FC<{ onComplete: any, onTimeUpdate: any, saveProgress: any, data: QuizState }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const nextSection = SECTIONS[currentIndex + 1];
  const prevSection = SECTIONS[currentIndex - 1];
  const navigateTo = (id: string) => { setActiveTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (activeTab === 'menu') {
    return (
      <div className="space-y-12 animate-fade-in pb-20">
        <div className="border-b border-slate-200 dark:border-slate-700 pb-12">
          <Badge type="brand" className="mb-4">Módulo 1</Badge>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">Fundamentos</h1>
          <p className="text-slate-500 font-medium text-lg mt-4">¿Qué es la salud mental en el trabajo y por qué nos importa a todos?</p>
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
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Módulo 1 - {SECTIONS[currentIndex].label}</h2>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentIndex + 1} / {SECTIONS.length}</div>
      </div>

      <main className="min-h-[60vh] px-2 md:px-0">
        {activeTab === 'que-es' && (
          <div className="space-y-8">
            <Card title="Una definición sencilla" className="border-l-8 border-brand-500 !rounded-[2.5rem]">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                La <b>salud mental</b> es un estado de bienestar que nos permite afrontar las tensiones normales de la vida, trabajar de forma productiva y aportar a nuestra comunidad. No es solo "la ausencia de enfermedad": es sentirnos capaces, conectados y con sentido.
              </p>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl">
                <Sparkles className="text-brand-400 mb-4" />
                <h4 className="text-brand-400 font-bold text-xs tracking-wider mb-4">En el trabajo</h4>
                <p className="text-lg font-medium leading-relaxed opacity-90">Pasamos buena parte de la vida trabajando. Un entorno laboral sano protege la salud mental; uno tóxico la deteriora.</p>
              </div>
              <div className="bg-brand-600 p-10 rounded-[2.5rem] text-white shadow-xl">
                <Users className="text-brand-100 mb-4" />
                <h4 className="text-brand-100 font-bold text-xs tracking-wider mb-4">Es de todos</h4>
                <p className="text-lg font-medium leading-relaxed">Cuidar la salud mental no es responsabilidad solo de quien la atraviesa: es una tarea compartida del equipo y de la organización.</p>
              </div>
            </div>
            <Callout type="info">Cualquier persona puede atravesar una dificultad de salud mental en algún momento. Hablar de ello es el primer paso para cuidarnos.</Callout>
          </div>
        )}

        {activeTab === 'importancia' && (
          <div className="space-y-8">
            <Card title="Por qué importa">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Cuando la salud mental se descuida, las personas sufren y el trabajo también: aumentan el ausentismo, los errores y la rotación, y disminuyen la motivación y la creatividad.</p>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { n: '1 de 5', l: 'personas vive una dificultad de salud mental en algún momento del año' },
                { n: '+ foco', l: 'el bienestar mejora la concentración, la creatividad y el compromiso' },
                { n: '- rotación', l: 'los entornos sanos reducen el ausentismo y la rotación' }
              ].map(k => (
                <div key={k.l} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl">
                  <div className="text-3xl font-black text-brand-600 mb-3">{k.n}</div>
                  <div className="text-xs font-bold text-slate-500 leading-snug">{k.l}</div>
                </div>
              ))}
            </div>
            <Callout type="conclusion">Invertir en bienestar no es un gasto: es cuidar a las personas y, a la vez, sostener el buen funcionamiento de la organización.</Callout>
          </div>
        )}

        {activeTab === 'mitos' && (
          <div className="space-y-4">
            <Accordion title="“Pedir ayuda es señal de debilidad”" defaultOpen>
              <p>Falso. Reconocer que necesitamos apoyo es un acto de autocuidado y de valentía. Igual que vamos al médico por un dolor físico, cuidar la mente es igual de legítimo.</p>
            </Accordion>
            <Accordion title="“El estrés siempre es malo”">
              <p>No del todo. Un nivel moderado de estrés puede activarnos. El problema es el estrés intenso y sostenido en el tiempo, que agota y enferma.</p>
            </Accordion>
            <Accordion title="“Los problemas de salud mental no se pueden mejorar”">
              <p>Falso. Con apoyo adecuado, hábitos saludables y, cuando hace falta, acompañamiento profesional, las personas mejoran y se recuperan.</p>
            </Accordion>
            <Accordion title="“Eso no pasa en mi equipo”">
              <p>Puede estar ocurriendo sin que se note. Por eso importa crear confianza para hablar del tema sin miedo a ser juzgados.</p>
            </Accordion>
          </div>
        )}

        {activeTab === 'quiz' && (
          <Quiz
            questions={[
              { id: 1, question: "La salud mental se define mejor como:", options: ["La ausencia de enfermedad", "Un estado de bienestar para afrontar la vida, trabajar y aportar", "Estar siempre feliz"], correctAnswer: 1 },
              { id: 2, question: "Cuidar la salud mental en el trabajo es responsabilidad de:", options: ["Solo de quien la atraviesa", "Solo del área de talento humano", "Una tarea compartida del equipo y la organización"], correctAnswer: 2 },
              { id: 3, question: "Pedir ayuda cuando lo necesitamos es:", options: ["Una señal de debilidad", "Un acto de autocuidado y valentía", "Algo que se debe ocultar"], correctAnswer: 1 }
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
