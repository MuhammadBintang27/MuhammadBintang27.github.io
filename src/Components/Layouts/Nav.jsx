import React, { useState, useEffect } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Fungsi untuk menangani scroll ke elemen
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Menggunakan Intersection Observer untuk mendeteksi bagian aktif
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set bagian aktif berdasarkan ID
          }
        });
      },
      { threshold: 0.1 } // Trigger jika 60% elemen terlihat
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Daftar menu navigasi
  const routes = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "project", name: "Project" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full p-4 z-10">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          GasCari 
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 text-white flex-wrap">
          {routes.map((route) => (
            <button
              key={route.id}
              onClick={() => scrollToSection(route.id)}
              className={`group hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 pb-2 ${
                activeSection === route.id
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : ""
              }`}
            >
              {route.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
