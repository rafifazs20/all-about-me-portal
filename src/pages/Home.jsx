import React from "react";
import HeroSection from "../components/HeroSection";
import PortalCard from "../components/PortalCard";
import AnimatedPage from "../components/AnimatedPage";

export default function Home(){
   return (
     <AnimatedPage>
        <div className="container mx-auto px-4 py-10">
          <HeroSection />
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <PortalCard to="/all-about-me" title="All About Me" desc="Perkenalan, Hobi, dan Skill" accent />
             <PortalCard to="/songs-for-you" title="Songs for You" desc="Lagu favorit disertai video dan lirik untuk orang yang berarti" />
             <PortalCard to="/my-stories-for-you" title="My Stories for You" desc="Cerita inspiratif pribadi yang ingin di bagikan" />
             <PortalCard to="/my-shape" title="My Shape" desc="Piagam Diri, Pernyataan Misi Pribadi, dan Identitas Naratif" />
             <PortalCard to="/my-personal-review" title="My Personal Review" desc="Self and peer assessment summary" />
          </section>
        </div>
     </AnimatedPage>
   )
}