import React, { useState } from 'react';
import { Card, Badge, Quiz, Accordion, Callout } from '../components/UI';
import { Leaf, Users, MessageCircle, CheckCircle, ArrowLeft, ArrowRight, LayoutGrid, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';
import { QuizState } from '../types';

const SECTIONS = [
  { id: 'entorno', label: 'Entornos saludables', icon: Leaf, desc: 'Qué hace sano un lugar de trabajo.' },
  { id: 'lideres', label: 'El papel del equipo', icon: Users, desc: 'Líderes y compañeros que cuidan.' },
  { id: 'apoyar', label: 'Cómo apoyar', icon: MessageCircle, desc: 'Qué decir y qué evitar.' },
  { id: 'quiz', label: 'Evaluación', icon: CheckCircle, desc: 'Cierre del Módulo 4.' }
];

export const ForensicModule: React.FC<{ onComplete: any, onTimeUpdate: any, saveProgress: any, data: QuizState }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const nextSection = SECTIONS[currentIndex + 1];
  const prevSection = SECTIONS[currentIndex - 1];
  const navigateTo = (id: string) => { setActiveTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (activeTab === 'menu') {
    return (
      <div className="space-y-12 animate-fade-in pb-20">
        <div className="border-b border-slate-200 dark:border-slate-700 pb-12">
          <Badge type="brand" className="mb-4">Módulo 4</Badge>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">Entornos saludables</h1>
          <p className="text-slate-500 font-medium text-lg mt-4">Promover el bienestar: una responsabilidad de toda la organización.</p>
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
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Módulo 4 - {SECTIONS[currentIndex].label}</h2>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentIndex + 1} / {SECTIONS.length}</div>
      </div>

      <main className="min-h-[60vh] px-2 md:px-0">
        {activeTab === 'entorno' && (
          <div className="space-y-8">
            <Card title="¿Qué hace sano a un lugar de trabajo?" className="border-l-8 border-brand-500 !rounded-[2.5rem]">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                Un entorno laboral saludable no es el que no tiene presión, sino el que la gestiona con respeto, claridad y apoyo. La cultura pesa más que cualquier beneficio aislado.
              </p>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { t: 'Carga de trabajo razonable', d: 'Objetivos claros y alcanzables, con recursos y tiempos realistas.' },
                { t: 'Claridad de rol', d: 'Saber qué se espera de cada persona evita angustia e incertidumbre.' },
                { t: 'Reconocimiento', d: 'Valorar el aporte de las personas, no solo señalar lo que falta.' },
                { t: 'Seguridad psicológica', d: 'Poder expresar dudas, errores o necesidades sin miedo a represalias.' }
              ].map(f => (
                <div key={f.t} className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0"><Heart size={20} /></div>
                  <div>
                    <h4 className="font-black text-slate-800 dark:text-white text-sm">{f.t}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lideres' && (
          <div className="space-y-6">
            <Card title="Quien lidera, marca el clima">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">No hace falta ser psicólogo para cuidar a un equipo. Bastan gestos cotidianos sostenidos en el tiempo.</p>
            </Card>
            <Accordion title="Dar el ejemplo" defaultOpen>
              <p>Respetar horarios, tomar pausas y hablar con naturalidad del bienestar autoriza a los demás a hacerlo también.</p>
            </Accordion>
            <Accordion title="Conversaciones uno a uno">
              <p>Un "¿cómo vas, de verdad?" con tiempo para escuchar detecta problemas mucho antes que cualquier indicador.</p>
            </Accordion>
            <Accordion title="Distribuir la carga con criterio">
              <p>Repartir el trabajo de forma justa y revisar plazos imposibles antes de que se conviertan en desgaste.</p>
            </Accordion>
          </div>
        )}

        {activeTab === 'apoyar' && (
          <div className="space-y-8">
            <p className="text-slate-500 font-medium italic">Si un compañero está pasando por un mal momento, lo que decimos importa. No se trata de "arreglarlo", sino de acompañar.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm mb-4 uppercase tracking-widest"><ThumbsUp size={16} /> Ayuda</div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>"Estoy aquí, cuéntame con calma."</li>
                  <li>"No estás solo en esto."</li>
                  <li>Escuchar sin interrumpir ni juzgar.</li>
                  <li>Sugerir ayuda profesional con respeto.</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-[2.5rem] border border-red-100 dark:border-red-900/40">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-black text-sm mb-4 uppercase tracking-widest"><ThumbsDown size={16} /> Mejor evitar</div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>"Échale ganas, eso es normal."</li>
                  <li>"Otros están peor que tú."</li>
                  <li>Minimizar o dar consejos apresurados.</li>
                  <li>Difundir lo que te confiaron.</li>
                </ul>
              </div>
            </div>
            <Callout type="conclusion">Acompañar no es resolver. Escuchar con respeto y orientar hacia apoyo profesional ya es una gran ayuda.</Callout>
          </div>
        )}

        {activeTab === 'quiz' && (
          <Quiz
            questions={[
              { id: 1, question: "Un entorno laboral saludable se caracteriza por:", options: ["No tener nunca presión", "Gestionar la presión con claridad, respeto y apoyo", "Premiar trabajar sin descanso"], correctAnswer: 1 },
              { id: 2, question: "Para cuidar a un equipo, quien lidera debería sobre todo:", options: ["Tener formación clínica", "Dar el ejemplo y abrir conversaciones de escucha", "Evitar hablar del tema"], correctAnswer: 1 },
              { id: 3, question: "Al apoyar a un compañero en dificultad, conviene:", options: ["Decir 'otros están peor'", "Escuchar sin juzgar y orientar a apoyo profesional", "Resolverle el problema por él"], correctAnswer: 1 }
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
