import React from 'react';
import basketImage from '../assets/Basket.jpg';
import competitionImage from '../assets/Competition.jpg';
import websiteImage from '../assets/Website.jpg';

const hobbies = [
  {
    title: "Olahraga",
    description: "Basket, Badminton, dan Futsal.",
    imageUrl: basketImage
  },
  {
    title: "Coding",
    description: "Belajar bahasa baru dan membuat project kreatif.",
    imageUrl: websiteImage
  },
  {
    title: "Kompetisi",
    description: "Mengikuti berbagai macam perlombaan misalnya BCC, Hackaton, dan Essai.",
    imageUrl: competitionImage
  }
];

export default function HobbySection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {hobbies.map((hobby, index) => (
        <div 
          key={index} 
          className="relative h-80 w-full rounded-xl shadow-lg overflow-hidden group transform 
                     transition-transform duration-500 ease-in-out
                     hover:rotate-3 hover:scale-105"
        >
          <img 
            src={hobby.imageUrl} 
            alt={hobby.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out
                       group-hover:brightness-50 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 flex flex-col justify-end p-6 
                       bg-gradient-to-t from-black/80 to-transparent
                       opacity-0 group-hover:opacity-100 
                       transition-opacity duration-500 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{hobby.title}</h3>
            <p className="text-gray-200">{hobby.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}