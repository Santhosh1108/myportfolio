import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Instagram,
  Briefcase,
  Send,
  Palette,
} from "lucide-react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Increasing WhatsApp User Base",
      tech: "Product Strategy, User Research, Feature Design",
      url: "https://www.linkedin.com/in/santhosh12/",
    },
    {
      title: "Competitive Pricing Analysis",
      tech: "Market Research, Pricing Strategy, Business Analysis",
      url: "https://www.linkedin.com/in/santhosh12/",
    },
    {
      title: "SkiaVerse Product Strategy",
      tech: "Product Management, User Analytics, Cross-functional Leadership",
      url: "https://www.linkedin.com/in/santhosh12/",
    },
  ];

  const skills = [
    "Product Management",
    "UI/UX Design",
    "User Research",
    "HTML/CSS",
    "JavaScript",
    "Git",
    "Figma",
    "Photography",
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Santhosh1108" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/santhosh12/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/santhxsh10/",
    },
    {
      icon: Send,
      label: "Telegram",
      url: "https://telegram.me/santhosh_897",
    },
  ];

  const additionalLinks = [
    {
      icon: Palette,
      label: "Behance",
      url: "https://www.behance.net/santhoshb29",
    },
    {
      icon: Send,
      label: "Discord",
      url: "https://discordapp.com/users/1014781892677083187",
    },
    {
      icon: Send,
      label: "Twitter",
      url: "https://x.com/SanthoshStark04",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">

      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8">

        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Santhosh Bommasamudram"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Santhosh Bommasamudram
              </h1>
              <p className="text-xl text-slate-400">
                Product Manager | UI/UX Designer | Developer
              </p>
            </div>
          </div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

          {/* ABOUT */}
          <div className="md:col-span-4 bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Briefcase /> About Me
            </h2>
            <p className="text-slate-300 mb-4">
              Computer Science student at IIIT Ranchi with strong interest in
              Product Management and UI/UX Design.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div className="md:col-span-2 bg-blue-900/30 rounded-3xl p-6 border border-blue-700/30">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 hover:text-blue-400"
              >
                <s.icon size={20} /> {s.label}
              </a>
            ))}
          </div>

          {/* PROJECTS */}
          <div className="md:col-span-4 bg-purple-900/30 rounded-3xl p-8 border border-purple-700/30">
            <h2 className="text-3xl font-bold mb-6">Featured Case Studies</h2>
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 p-4 bg-slate-800/50 rounded-xl hover:border-purple-500 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-slate-400">{p.tech}</p>
              </a>
            ))}
          </div>

          {/* RESUME */}
          <div className="md:col-span-2 bg-orange-900/30 rounded-3xl p-6 border border-orange-700/30">
            <FileText size={32} className="text-orange-400 mb-3" />
            <h3 className="text-2xl font-bold">Resume</h3>
            <a
              href="https://drive.google.com/file/d/1qFlj6uxxgHzQtx962AoW5BiE_LmuFwtf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center py-3 bg-orange-500/20 rounded-xl border border-orange-500/30"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-slate-500">
          © 2026 Santhosh Bommasamudram. Built with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}
