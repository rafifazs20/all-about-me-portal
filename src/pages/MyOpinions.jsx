import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import { uasData } from '../data/uasData';
import { FaInfoCircle, FaBalanceScale, FaAngry, FaHistory } from 'react-icons/fa';

export default function MyOpinions() {
  const { opinion } = uasData;

  const components = [
    { icon: <FaInfoCircle />, label: "Information", text: opinion.information, color: "text-blue-400" },
    { icon: <FaBalanceScale />, label: "Values", text: opinion.values, color: "text-purple-400" },
    { icon: <FaAngry />, label: "Feelings", text: opinion.feelings, color: "text-red-400" },
    { icon: <FaHistory />, label: "Experience", text: opinion.experience, color: "text-green-400" },
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-12">
        <section className="text-center">
          <AnimatedTitle text="My Opinions" />
          <h2 className="text-2xl font-bold text-white mt-4">{opinion.title}</h2>
        </section>

        {/* --- GRID REBUSAN OPINI --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((item, index) => (
            <div key={index} className="card-glass p-8 rounded-2xl hover:border-electric-cyan/50 transition-all">
              <div className={`text-3xl ${item.color} mb-4 flex items-center gap-3`}>
                {item.icon}
                <span className="text-sm font-bold tracking-widest uppercase text-white">{item.label}</span>
              </div>
              <p className="text-graphite-silver leading-relaxed text-justify">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* --- SUMMARY / CONCLUSION --- */}
        <section className="card-glass p-10 rounded-2xl border-t-4 border-electric-cyan bg-midnight-black/60 text-center">
          <h3 className="text-xl font-bold text-white mb-4 italic">The Beautiful Mind Perspective</h3>
          <p className="text-2xl font-orbitron text-electric-cyan leading-relaxed">
            "{opinion.summary}"
          </p>
          <div className="mt-6 text-sm text-graphite-silver">
            *Didasarkan pada analisis kritis terhadap krisis lingkungan Sumatera 2025.
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}