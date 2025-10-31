import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import bgVideo from "../assets/jackson-storm-video.mp4";
import bgImage from "../assets/jackson-storm-bg.jpg";

export default function Layout({ children }){
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const filterClasses = isHomePage
    ? "filter blur-lg brightness-40"
    : "filter blur-2xl brightness-30";

    return (
     <div className="relative min-h-screen bg-storm text-graphite-silver selection:bg-storm-blue selection:text-white overflow-hidden">

       <div className={`absolute inset-0 w-full h-full z-0 ${filterClasses}`}>

         {isHomePage ? (
           
           <video
             autoPlay
             loop
            //  muted
             playsInline
             className="w-full h-full object-cover"
             key="video-bg"
           >
             <source src={bgVideo} type="video/mp4" />
             Browser-mu tidak mendukung tag video.
           </video>

         ) : (
           
           <img
             src={bgImage}
             alt="Jackson Storm Background"
             className="w-full h-full object-cover"
             key="image-bg"
           />

         )}



         <div className="absolute inset-0 w-full h-full">
           <div 
             className="pulse-light" 
             style={{ 
               top: '75%', 
               left: '35%', 
               animationDelay: '0.5s',
               '--glow-color-soft': 'rgba(255, 0, 0, 0.4)',
               '--glow-color-hard': 'rgba(255, 20, 20, 0.7)'
             }}
           />

           <div 
             className="pulse-light" 
             style={{ 
               top: '48%', 
               left: '80%', 
               animationDelay: '0s',
               '--glow-color-soft': 'rgba(0, 191, 255, 0.5)',
               '--glow-color-hard': 'rgba(0, 220, 255, 0.8)'
             }}
           />
         </div>
       </div>
       
       <div className="relative z-20">
           <Navbar />
           <main className="w-full">
             {children}
           </main>
       </div>

      </div>
    )
}