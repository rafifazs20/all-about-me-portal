import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import { uasData } from '../data/uasData';
import { FaBrain, FaMapSigns, FaTable } from 'react-icons/fa';

export default function MyKnowledge() {
  const { knowledge } = uasData;

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-12">
        <section className="text-center">
          <AnimatedTitle text="My Knowledge" />
          <p className="text-xl text-graphite-silver mt-4 max-w-3xl mx-auto">
            Peta taksonomi pengetahuan untuk mengubah data mentah menjadi kebijakan aplikatif.
          </p>
        </section>

        {/* --- 1. PRIMITIVE KNOWLEDGE MAP (Level 1-2) --- */}
        <div className="card-glass p-8 rounded-2xl border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FaMapSigns className="text-blue-400" /> Primitive Knowledge Map (The "What")
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {knowledge.primitiveMap.definitions.map((item, i) => (
              <div key={i} className="bg-storm/30 p-5 rounded-xl border border-white/5">
                <h4 className="text-electric-cyan font-bold mb-2">{item.term}</h4>
                <p className="text-graphite-silver text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 2. BLOOM'S TAXONOMY TABLE (Level 1-7) --- */}
        <div className="card-glass p-8 rounded-2xl overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FaTable className="text-purple-400" /> Applied Knowledge Taxonomy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-electric-cyan uppercase text-sm tracking-widest">
                  <th className="py-4 px-4">Level</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Context: Deforestation Crisis</th>
                </tr>
              </thead>
              <tbody className="text-graphite-silver">
                {knowledge.bloomLevels.map((item) => (
                  <tr key={item.level} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-orbitron">{item.level}</td>
                    <td className="py-4 px-4 font-bold text-white">{item.label}</td>
                    <td className="py-4 px-4 text-sm md:text-base">{item.task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- REFLECTIVE SUMMARY --- */}
        <section className="text-center bg-electric-cyan/10 p-8 rounded-2xl border border-electric-cyan/20">
          <FaBrain className="text-4xl text-electric-cyan mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Produk Pengetahuan</h3>
          <p className="text-graphite-silver max-w-2xl mx-auto">
            Pengetahuan ini bukan sekadar hafalan, melainkan "blueprint" untuk rekayasa sosial. 
            Melalui Taksonomi Bloom, kita mengurai ketidakberdayaan masyarakat Sumatera menjadi kekuatan kontrol sosial yang terukur.
          </p>
        </section>
      </div>
    </AnimatedPage>
  );
}