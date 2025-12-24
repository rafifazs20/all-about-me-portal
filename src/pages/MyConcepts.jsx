import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import { uasData } from '../data/uasData';
import { FaWeightHanging, FaChargingStation, FaSyncAlt } from 'react-icons/fa';

export default function MyConcepts() {
  const { concept } = uasData;

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-12">
        <section className="text-center">
          <AnimatedTitle text="My Concepts" />
          <p className="text-xl text-graphite-silver max-w-2xl mx-auto mt-4">
            Menyaring esensi dari fenomena kompleks menjadi logika mesin abstrak yang kuat.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="card-glass p-8 rounded-2xl border-l-4 border-electric-cyan">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaSyncAlt className="text-electric-cyan" /> Logic Machine (K & B)
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <FaWeightHanging className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-wider">Beban (Problem)</h4>
                  <p className="text-graphite-silver">{concept.logicMachine.beban}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <FaChargingStation className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-wider">Kekuatan (Force)</h4>
                  <p className="text-graphite-silver">{concept.logicMachine.kekuatan}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-glass p-6 rounded-2xl flex-1">
              <h4 className="text-electric-cyan font-bold mb-2 tracking-widest uppercase text-xs">The Essence</h4>
              <p className="text-2xl font-orbitron text-white italic">"{concept.essence}"</p>
            </div>
            
            <div className="card-glass p-6 rounded-2xl flex-1 bg-midnight-black/40">
              <h4 className="text-graphite-silver font-bold mb-2 tracking-widest uppercase text-xs">Analogy</h4>
              <p className="text-graphite-silver leading-relaxed">
                {concept.analogy}
              </p>
            </div>
          </div>
        </div>

        <section className="card-glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4">Latar Belakang Fenomena</h3>
          <p className="text-graphite-silver leading-relaxed text-justify">
            {concept.phenomenon} Konsep ini masuk ke dalam kategori <strong>{concept.type}</strong>, 
            di mana efisiensi pemecahan masalah polusi tidak lagi hanya bergantung pada kebijakan top-down, 
            melainkan pada rekayasa mekanisme partisipasi publik yang sistematis.
          </p>
        </section>
      </div>
    </AnimatedPage>
  );
}