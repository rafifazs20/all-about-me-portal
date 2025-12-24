import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTitle from '../components/AnimatedTitle';
import { uasData } from '../data/uasData';
import { FaSearchLocation, FaEye, FaBell, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function MyInnovations() {
  const { innovation } = uasData;

  // Map string icon ke komponen icon asli
  const iconMap = {
    FaSearchLocation: <FaSearchLocation />,
    FaEye: <FaEye />,
    FaBell: <FaBell />,
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10 space-y-12">
        <section className="text-center">
          <AnimatedTitle text="My Innovations" />
          <h2 className="text-3xl font-bold text-white mt-4 font-orbitron text-electric-cyan">
            {innovation.title}
          </h2>
        </section>

        {/* --- PROBLEM & VALUE INNOVATION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-glass p-8 rounded-2xl border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaLightbulb className="text-yellow-400" /> The Problem
            </h3>
            <p className="text-graphite-silver leading-relaxed">
              {innovation.problemStatement}
            </p>
          </div>

          <div className="card-glass p-8 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaUsers className="text-green-400" /> Value Co-creation
            </h3>
            <p className="text-graphite-silver leading-relaxed">
              {innovation.valueInnovation.coCreation}
            </p>
          </div>
        </div>

        {/* --- CORE FEATURES --- */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">Core System Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovation.features.map((feature) => (
              <div key={feature.id} className="card-glass p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="text-4xl text-electric-cyan mb-4">
                  {iconMap[feature.icon]}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.name}</h4>
                <p className="text-graphite-silver text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SUMMARY --- */}
        <section className="card-glass p-10 rounded-2xl bg-midnight-black/40 text-center border border-white/10">
          <p className="text-xl text-graphite-silver italic max-w-4xl mx-auto">
            "{innovation.summary}"
          </p>
        </section>
      </div>
    </AnimatedPage>
  );
}