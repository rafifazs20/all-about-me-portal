import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

// --- Import Halaman UTS ---
import Home from "./pages/Home";
import AllAboutMe from "./pages/AllAboutMe";
import SongsForYou from "./pages/SongsForYou";
import MyStoriesForYou from "./pages/MyStoriesForYou";
import MyShape from "./pages/MyShape";
import MyPersonalReview from "./pages/MyPersonalReview";

// --- Import Halaman UAS  ---
import MyConcepts from "./pages/MyConcepts"; 
import MyOpinions from "./pages/MyOpinions"; 
import MyInnovations from "./pages/MyInnovations"; 
import MyKnowledge from "./pages/MyKnowledge"; 
import MyProfessionalReview from "./pages/MyProfessionalReview"; 

import NotFound from "./pages/NotFound";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Route Dasar & UTS */}
        <Route path="/" element={<Home />} />
        <Route path="/all-about-me" element={<AllAboutMe />} />
        <Route path="/songs-for-you" element={<SongsForYou />} />
        <Route path="/my-stories-for-you" element={<MyStoriesForYou />} />
        <Route path="/my-shape" element={<MyShape />} />
        <Route path="/my-personal-review" element={<MyPersonalReview />} />

        {/* --- Route UAS --- */}
        <Route path="/my-concepts" element={<MyConcepts />} />
        { <Route path="/my-opinions" element={<MyOpinions />} />}
        { <Route path="/my-innovations" element={<MyInnovations />} />}
        { <Route path="/my-knowledge" element={<MyKnowledge />} />}
        { <Route path="/my-professional-review" element={<MyProfessionalReview />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}