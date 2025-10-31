import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="text-center py-24">
      <h2 className="text-4xl font-bold neon">404</h2>
      <p className="text-gray-300 mt-4">Page not found</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 rounded bg-[#0E4D92]">Back Home</Link>
    </div>
  )
}