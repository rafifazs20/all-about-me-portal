import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from "framer-motion";

const navStructure = [
  { to: "/", label: "Home" },
  { to: "/all-about-me", label: "About Me" },
  { 
    label: "UTS Collection", 
    children: [
      { to: "/all-about-me", label: "UTS 1 - All About Me" },
      { to: "/songs-for-you", label: "UTS 2 - Songs for You" },
      { to: "/my-stories-for-you", label: "UTS 3 - My Stories" },
      { to: "/my-shape", label: "UTS 4 - My SHAPE" },
      { to: "/my-personal-review", label: "UTS 5 - UTS Review" },
    ]
  },
  { 
    label: "UAS Masterpiece", 
    children: [
      { to: "/my-concepts", label: "UAS 1 - My Concepts" },
      { to: "/my-opinions", label: "UAS 2 - My Opinions" },
      { to: "/my-innovations", label: "UAS 3 - My Innovations" },
      { to: "/my-knowledge", label: "UAS 4 - My Knowledge" },
      { to: "/my-professional-review", label: "UAS 5 - UAS Review" },
    ]
  },
];

export default function Navbar() {
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [loc.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full flex justify-end md:justify-center pt-4 px-4">
        <div className="hidden md:flex gap-2 items-center card-glass rounded-full p-2 border border-white/10 shadow-lg">
          {navStructure.map((menu, idx) => (
            <div 
              key={idx} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menu.children ? (
                <div className="py-2">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 cursor-default
                      ${menu.children.some(child => loc.pathname === child.to) 
                        ? "bg-storm-blue text-electric-cyan" 
                        : "text-graphite-silver group-hover:text-white"}`}
                  >
                    {menu.label}
                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        // --- STYLING LIST GELAP & PEKAT ---
                        className="absolute top-full left-0 min-w-[260px] 
                                   bg-[#0a0a0c] border border-white/20 
                                   rounded-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                                   backdrop-blur-md z-[110]"
                      >
                        {menu.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`block px-4 py-3 rounded-lg text-sm transition-all border-b border-white/5 last:border-0
                              ${loc.pathname === child.to 
                                ? "text-electric-cyan bg-white/10 font-bold" 
                                : "text-graphite-silver hover:text-white hover:bg-white/5"}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={menu.to}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all block
                    ${loc.pathname === menu.to ? "bg-storm-blue text-electric-cyan" : "text-graphite-silver hover:bg-steel-gray hover:text-white"}`}
                >
                  {menu.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 flex items-center justify-center card-glass rounded-full border border-white/10 text-white shadow-lg">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3BottomRightIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Juga dibuat lebih pekat) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 left-4 right-4 z-[100] overflow-y-auto max-h-[80vh] no-scrollbar shadow-2xl"
          >
            <div className="bg-[#0a0a0c] rounded-2xl p-4 border border-white/20 space-y-2 shadow-2xl">
              {navStructure.map((menu, idx) => (
                <div key={idx} className="space-y-1">
                  {menu.children ? (
                    <>
                      <div className="px-4 py-2 text-xs font-bold text-electric-cyan uppercase tracking-widest opacity-70">
                        {menu.label}
                      </div>
                      {menu.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-6 py-3 rounded-xl text-base transition-all
                            ${loc.pathname === child.to ? "bg-storm-blue text-electric-cyan" : "text-graphite-silver hover:text-white"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={menu.to}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all
                        ${loc.pathname === menu.to ? "bg-storm-blue text-electric-cyan" : "text-graphite-silver hover:text-white"}`}
                    >
                      {menu.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}