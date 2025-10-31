import React from "react";
import { Link } from "react-router-dom";

export default function PortalCard({ to, title, desc, accent=false }){
  return (
    <Link to={to} className={`block p-6 rounded-xl card-glass-home shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:border-electric-cyan/50 border border-transparent`}>
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-3 text-white">
        <span className={`w-2.5 h-2.5 rounded-full ${accent ? 'bg-electric-cyan' : 'bg-graphite-silver/50'} shadow-[0_0_10px_theme('colors.electric-cyan/40%')]`}></span>
        {title}
      </h3>
      <p className="text-sm text-graphite-silver">{desc}</p>
    </Link>
  );
}