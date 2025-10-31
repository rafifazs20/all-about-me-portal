import React from "react";
import { Link } from "react-router-dom";


export default function HeroSection(){
  return (
    <section className="rounded-xl p-8 mb-8 card-glass-home overflow-hidden relative">
      <div className="absolute inset-0 opacity-30 track-gradient"></div>
      

      <div className="relative z-10">
        
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold neon text-white">Fast. Future. Competitive.</h1>
          <p className="mt-4 text-graphite-silver max-w-xl">
            Itulah bagaimana saya hidup dan belajar. Seperti Jackson Storm di Cars 3, saya tumbuh sebagai seseorang yang cepat beradaptasi, berpikir jauh ke depan, dan kompetitif di setiap tantangan yang saya hadapi.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link 
              to="/all-about-me" 
              className="px-5 py-2 rounded-md bg-storm-blue hover:bg-electric-cyan hover:text-midnight-black font-semibold transition-all neon transform hover:scale-105"
            >
              View All About Me
            </Link>
            <Link 
              to="/songs-for-you" 
              className="px-5 py-2 rounded-md border border-white/20 hover:bg-white/10 text-white font-semibold transition-all transform hover:scale-105"
            >
              Songs for You
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}