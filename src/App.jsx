import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Import
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllAboutMe from "./pages/AllAboutMe";
import SongsForYou from "./pages/SongsForYou";
import MyStoriesForYou from "./pages/MyStoriesForYou";
import MyShape from "./pages/MyShape";
import MyPersonalReview from "./pages/MyPersonalReview";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/all-about-me" element={<AllAboutMe />} />
        <Route path="/songs-for-you" element={<SongsForYou />} />
        <Route path="/my-stories-for-you" element={<MyStoriesForYou />} />
        <Route path="/my-shape" element={<MyShape />} />
        <Route path="/my-personal-review" element={<MyPersonalReview />} />
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
  )
}