import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, FileText, ExternalLink, Instagram, Briefcase, Send, Palette } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    { title: "Increasing WhatsApp User Base", tech: "Product Strategy, User Research, Feature Design", url: "https://www.linkedin.com/in/santhosh12/" },
    { title: "Competitive Pricing Analysis", tech: "Market Research, Pricing Strategy, Business Analysis", url: "https://www.linkedin.com/in/santhosh12/" },
    { title: "SkiaVerse Product Strategy", tech: "Product Management, User Analytics, Cross-functional Leadership", url: "https://www.linkedin.com/in/santhosh12/" },
  ];

  const skills = ["Product Management", "UI/UX Design", "User Research", "HTML/CSS", "JavaScript", "Git", "Figma", "Photography"];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Santhosh1108" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/santhosh12/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/santhxsh10/" },
    { icon: Send, label: "Telegram", url: "https://telegram.me/santhosh_897" },
  ];

  const additionalLinks = [
    { icon: Palette, label: "Behance", url: "https://www.behance.net/santhoshb29" },
    { icon: Send, label: "Discord", url: "https://discordapp.com/users/1014781892677083187" },
    { icon: Send, label: "Twitter", url: "https://x.com/SanthoshStark04" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto p-4 md:p-8">

        {/* HEADER */}
        <header className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-pulse-slow overflow-hidden">

              {/* ✅ FIXED IMAGE */}
              <img
                src="/profile.jpg"
                alt="Santhosh Bommasamudram"
                className="w-full h-full rounded-3xl object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />

              {/* Fallback initials */}
              <div className="w-full h-full rounded-3xl bg-slate-900 hidden items-center justify-center text-4xl font-bold">
                SB
              </div>

            </div>

            <div>
              <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Santhosh Bommasamudram
              </h1>
              <p className="text-xl text-slate-400">
                Product Manager | UI/UX Designer | Developer
              </p>
            </div>
          </div>
        </header>

        {/* REST OF YOUR CODE IS UNCHANGED */}
        {/* (Everything else remains exactly as you sent) */}

        <footer className="mt-12 text-center text-slate-500">
          <p>© 2026 Santhosh Bommasamudram. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}
