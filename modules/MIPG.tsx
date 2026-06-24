import React, { useState } from 'react';
import { Card, Badge, Quiz, Accordion, Callout } from '../components/UI';
import { Activity, AlertCircle, Flame, CheckCircle, ArrowLeft, ArrowRight, LayoutGrid, Brain, Heart, Users } from 'lucide-react';
import { QuizState } from '../types';

const SECTIONS = [
  { id: 'estres', label: '¿Qué es el estrés?', icon: Activity, desc: 'Estrés sano vs. estrés crónico.' },
  { id: 'senales', label: 'Señales de alerta', icon: AlertCircle, desc: 'Físicas, emocionales y conductuales.' },
  { id: 'burnout', label: 'El agotamiento (burnout)', icon: Flame, desc: 'Las tres dimensiones del desgaste.' },
  { id: 'quiz', label: 'Evaluación', icon: CheckCircle, desc: 'Cierre del Módulo 2.' }
];

export const MIPGModule: React.FC<{ onComplete: any, onTimeUpdate: any, saveProgress: any, data: QuizState }> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const nextSection = SECTIONS[currentIndex + 1];
  const prevSection = SECTIONS[currentIndex - 1];
  const navigateTo = (id: string) => { setActiveTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (activeTab === 'menu') {
    return (
      <div className="space-y-12 animate-fade-in pb-20">
        <div className="border-b border-slate-200 dark:border-slate-700 pb-12">
          <Badge type="brand" className="mb-4">Módulo 2</Badge>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">Señales de alerta</h1>
          <p className="text-slate-500 font-medium text-lg mt-4">Reconocer a tiempo el estrés y el agotamiento en uno mismo y en los demás.</p>
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
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Módulo 2 - {SECTIONS[currentIndex].label}</h2>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentIndex + 1} / {SECTIONS.length}</div>
      </div>

      <main className="min-h-[60vh] px-2 md:px-0">
        {activeTab === 'estres' && (
          <div className="space-y-8">
            <Card title="El estrés no siempre es enemigo" className="border-l-8 border-brand-500 !rounded-[2.5rem]">
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                El estrés es la respuesta natural del cuerpo ante una exigencia. En dosis moderadas nos ayuda a reaccionar y rendir. El problema aparece cuando se vuelve <b>intenso y permanente</b>: ahí deja de protegernos y empieza a desgastarnos.
              </p>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/40">
                <h4 className="text-emerald-700 dark:text-emerald-400 font-black text-sm mb-3 uppercase tracking-widest">Estrés sano</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Puntual, ante un reto concreto. Nos activa, mejora el foco y desaparece cuando la situación pasa.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-[2.5rem] border border-red-100 dark:border-red-900/40">
                <h4 className="text-red-700 dark:text-red-400 font-black text-sm mb-3 uppercase tracking-widest">Estrés crónico</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Sostenido durante semanas o meses. Afecta el sueño, el ánimo, la salud física y las relaciones.</p>
              </div>
            </div>
            <Callout type="info">La pregunta clave no es "¿tengo estrés?" sino "¿cuánto dura y cómo me está afectando?".</Callout>
          </div>
        )}

        {activeTab === 'senales' && (
          <div className="space-y-8">
            <p className="text-slate-500 font-medium italic">Las señales suelen aparecer en tres planos. Reconocerlas a tiempo permite actuar antes de que escalen.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, t: 'Físicas', items: ['Cansancio que no descansa', 'Dolores de cabeza o tensión muscular', 'Problemas de sueño', 'Cambios en el apetito'] },
                { icon: Brain, t: 'Emocionales', items: ['Irritabilidad o cambios de humor', 'Ansiedad o preocupación constante', 'Desánimo o tristeza', 'Sensación de estar “al límite”'] },
                { icon: Users, t: 'Conductuales', items: ['Aislarse de los demás', 'Bajar el rendimiento o concentrarse menos', 'Aumentar consumo de café/alcohol', 'Faltar o llegar tarde con frecuencia'] }
              ].map(col => (
                <div key={col.t} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl">
                  <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4"><col.icon size={24} /></div>
                  <h4 className="font-black text-slate-800 dark:text-white text-lg mb-4">{col.t}</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {col.items.map(it => <li key={it} className="flex gap-2"><span className="text-brand-500">•</span>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <Callout type="conclusion">Una señal aislada no significa nada grave. La alerta se enciende cuando varias se mantienen en el tiempo.</Callout>
          </div>
        )}

        {activeTab === 'burnout' && (
          <div className="space-y-6">
            <Card title="¿Qué es el burnout?">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">El <b>síndrome de agotamiento (burnout)</b> es el desgaste que aparece por estrés laboral crónico mal gestionado. Se reconoce por tres dimensiones:</p>
            </Card>
            <Accordion title="1. Agotamiento emocional" defaultOpen>
              <p>Sensación de no poder más, de estar "sin batería". El descanso normal ya no repone la energía.</p>
            </Accordion>
            <Accordion title="2. Distanciamiento o cinismo">
              <p>Actitud fría o negativa hacia el trabajo y las personas: desconexión, irritabilidad, "ya nada me importa".</p>
            </Accordion>
            <Accordion title="3. Baja realización personal">
              <p>Sensación de ineficacia: sentir que se trabaja mucho y se logra poco, con pérdida de confianza en las propias capacidades.</p>
            </Accordion>
            <Callout type="info">El burnout no es "falta de carácter": es una respuesta a condiciones de trabajo sostenidas. Se previene y se trata.</Callout>
          </div>
        )}

        {activeTab === 'quiz' && (
          <Quiz
            questions={[
              { id: 1, question: "¿Cuándo el estrés se vuelve un problema para la salud?", options: ["Cuando es puntual ante un reto", "Cuando es intenso y se sostiene en el tiempo", "Siempre que aparece"], correctAnswer: 1 },
              { id: 2, question: "Las señales de alerta suelen aparecer en planos:", options: ["Solo físico", "Físico, emocional y conductual", "Solo emocional"], correctAnswer: 1 },
              { id: 3, question: "El burnout se reconoce por tres dimensiones: agotamiento, distanciamiento/cinismo y…", options: ["Baja realización personal", "Exceso de motivación", "Mejor rendimiento"], correctAnswer: 0 }
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
