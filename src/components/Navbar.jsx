import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';

const menus = [
   { to: "/", label: "Home" },
   { to: "/all-about-me", label: "All About Me" },
   { to: "/songs-for-you", label: "Songs for You" },
   { to: "/my-stories-for-you", label: "My Stories" },
   { to: "/my-shape", label: "My SHAPE" },
   { to: "/my-personal-review", label: "My Review" },
];


export default function Navbar(){
   const loc = useLocation();
   const [isOpen, setIsOpen] = useState(false);

   return (
    <>
        <nav className="sticky top-0 z-50 w-full flex justify-end md:justify-center pt-4 px-4">
        
          <div className="hidden md:flex gap-2 items-center card-glass rounded-full p-2 border border-white/10 shadow-lg">
             {menus.map(m => (
               <Link
                  key={m.to}
                  to={m.to}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
                    ${ loc.pathname === m.to 
                       ? "bg-storm-blue text-electric-cyan" 
                       : "text-graphite-silver hover:bg-steel-gray hover:text-white"
                    }`}
               >
                  {m.label}
               </Link>
             ))}
          </div>

          <div className="md:hidden">
             <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-12 h-12 flex items-center justify-center card-glass rounded-full border border-white/10 text-white shadow-lg"
          >
               {isOpen 
              ? <XMarkIcon className="w-6 h-6" /> 
              : <Bars3BottomRightIcon className="w-6 h-6" />
            }
             </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden fixed top-20 left-4 right-4 z-50">
          <div className="card-glass rounded-xl p-4 space-y-2 border border-white/10 shadow-lg">
               {menus.map(m => (
                 <Link
                    key={m.to}
                    to={m.to}
               	  onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all
                      ${ loc.pathname === m.to 
                         ? "bg-storm-blue text-electric-cyan" 
                         : "text-graphite-silver hover:bg-steel-gray hover:text-white"
               	  }`}
                 >
               	  {m.label}
                 </Link>
               ))}
          </div>
          </div>
        )}
    </>
  )
}