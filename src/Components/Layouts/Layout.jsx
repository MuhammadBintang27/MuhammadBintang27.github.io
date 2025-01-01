import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import StarsCanvas from "../Elements/StarBackground";

const LayoutWeb = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Tambahkan tema gelap
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-900 text-textDark">
      {/* StarsCanvas berada di atas background */}
      <div className="absolute inset-0 z-1">
        <StarsCanvas />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10">
        <Nav />
        {children} {/* Konten utama */}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWeb;
