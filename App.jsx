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
    { 
      title: "Increasing WhatsApp User Base", 
      tech: "Product Strategy, User Research, Feature Design", 
      url: "https://www.linkedin.com/in/santhosh12/" 
    },
    { 
      title: "Competitive Pricing Analysis", 
      tech: "Market Research, Pricing Strategy, Business Analysis", 
      url: "https://www.linkedin.com/in/santhosh12/" 
    },
    { 
      title: "SkiaVerse Product Strategy", 
      tech: "Product Management, User Analytics, Cross-functional Leadership", 
      url: "https://www.linkedin.com/in/santhosh12/" 
    },
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
      {/* Animated background gradient orbs */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-blue-500/50 animate-pulse-slow overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/Santhosh1108/portfolio-assets/main/profile.jpg" 
                alt="Santhosh Bommasamudram"
                className="w-full h-full rounded-3xl object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full rounded-3xl bg-slate-900 hidden items-center justify-center text-4xl font-bold">
                SB
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" 
                style={{ fontFamily: '"Cabinet Grotesk", "Clash Display", sans-serif' }}>
                Santhosh Bommasamudram
              </h1>
              <p className="text-xl text-slate-400" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                Product Manager | UI/UX Designer | Developer
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
            Passionate about building innovative digital products that solve real problems. From product strategy to development, 
            I bridge the gap between user needs and technical execution. Currently exploring opportunities in product management and UI/UX design.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
          
          {/* About Card - Large */}
          <div className={`md:col-span-4 md:row-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              <Briefcase className="text-blue-400" size={32} />
              About Me
            </h2>
            <div className="space-y-4 text-slate-300" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
              <p className="text-lg leading-relaxed">
                I'm a Computer Science student at IIIT Ranchi with a passion for product management and design. 
                My journey spans from full-stack development to strategic product thinking, with hands-on experience 
                at SkiaVerse where I contributed to product roadmaps and user research.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond tech, I lead the Photography Club (Piccell) and Media Council at my institute, managing teams of 15+ members 
                and creating content for 2,000+ followers. I believe great products come from understanding both users and technology deeply.
              </p>
              <p className="text-lg leading-relaxed">
                Currently seeking opportunities in product management and UI/UX roles where I can combine my technical background 
                with strategic thinking to build products that matter.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`md:col-span-2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-6 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-500 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all p-3 rounded-xl hover:bg-blue-500/10 group/link">
                  <social.icon className="group-hover/link:scale-110 transition-transform" size={24} />
                  <span style={{ fontFamily: '"Instrument Sans", sans-serif' }}>{social.label}</span>
                </a>
              ))}
              <a href="mailto:santhoshbommasamudram@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all p-3 rounded-xl hover:bg-blue-500/10 group/link">
                <Mail className="group-hover/link:scale-110 transition-transform" size={24} />
                <span style={{ fontFamily: '"Instrument Sans", sans-serif' }}>Email</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className={`md:col-span-2 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl rounded-3xl p-6 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '300ms' }}>
            <a href="https://www.google.com/maps/place/Tirupati" target="_blank" rel="noopener noreferrer" className="block">
              <MapPin className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                Based in
              </h3>
              <p className="text-slate-300 text-lg" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                Tirupati, India
              </p>
            </a>
          </div>

          {/* Featured Projects */}
          <div className={`md:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              <ExternalLink className="text-purple-400" size={32} />
              Featured Case Studies
            </h2>
            <div className="space-y-4">
              {projects.map((project, i) => (
                <a key={i} href={project.url} target="_blank" rel="noopener noreferrer"
                  className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all group/project">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover/project:text-purple-400 transition-colors" 
                      style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                      {project.title}
                    </h3>
                    <ExternalLink className="text-slate-500 group-hover/project:text-purple-400 group-hover/project:rotate-45 transition-all" size={20} />
                  </div>
                  <p className="text-slate-400" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                    {project.tech}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div className={`md:col-span-2 bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-3xl p-6 border border-orange-700/30 hover:border-orange-500/50 transition-all duration-500 group cursor-pointer ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '500ms' }}>
            <FileText className="text-orange-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              Resume
            </h3>
            <p className="text-slate-300 mb-4" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
              Download CV
            </p>
            <a href="https://drive.google.com/file/d/your-resume-id/view" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-orange-500/20 border border-orange-500/30 rounded-xl hover:bg-orange-500/30 transition-all font-medium text-center">
              Download PDF
            </a>
          </div>

          {/* More Links */}
          <div className={`md:col-span-3 bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-xl rounded-3xl p-6 border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              More Links
            </h3>
            <div className="space-y-3">
              {additionalLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-all p-3 rounded-xl hover:bg-indigo-500/10 group/link">
                  <link.icon className="group-hover/link:scale-110 transition-transform" size={20} />
                  <span style={{ fontFamily: '"Instrument Sans", sans-serif' }}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className={`md:col-span-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-6 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '700ms' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              Education & Certs
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <p className="font-bold text-cyan-400 mb-1" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                  IIIT Ranchi
                </p>
                <p className="text-sm text-slate-400" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  B.Tech Computer Science • 7.16 CGPA
                </p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <p className="font-bold text-cyan-400 mb-1" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                  Certifications
                </p>
                <p className="text-sm text-slate-400 mb-1" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  • Product Management (Pendo × Mind the Product)
                </p>
                <p className="text-sm text-slate-400 mb-1" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  • Office Admin Management
                </p>
                <p className="text-sm text-slate-400" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  • Strategic Management
                </p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className={`md:col-span-6 bg-gradient-to-br from-rose-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-8 border border-rose-700/30 hover:border-rose-500/50 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '800ms' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
              Leadership & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-rose-400 mb-2" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                  Photography Club Head
                </h3>
                <p className="text-slate-400 mb-3" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Led team of 15+ members, organized 8+ events, boosted engagement by 35%
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-rose-400 mb-2" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                  Media Council Secretary
                </h3>
                <p className="text-slate-400 mb-3" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Managed content for 2,000+ followers, increased engagement by 25%
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-rose-400 mb-2" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                  PR Team Member
                </h3>
                <p className="text-slate-400 mb-3" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
                  Coordinated outreach for 5+ events with 1,000+ participants
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className={`mt-12 text-center text-slate-500 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '900ms', fontFamily: '"Instrument Sans", sans-serif' }}>
          <p>© 2026 Santhosh Bommasamudram. Built with React & Tailwind CSS.</p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
