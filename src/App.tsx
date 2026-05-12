import { useState, useEffect, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGNUM_LOGO } from './assets/logo';
import {
  ChevronLeft,
  ChevronRight,
  Maximize
} from 'lucide-react';
import { slideComponentMap } from './mapping';

const SLIDES = [
  { id: 0, label: "Capa" },
  { id: 1, label: "Visão Estratégica" },
  { id: 2, label: "Raio-X Atual" },
  { id: 3, label: "Gap de Retenção" },
  { id: 4, label: "Diagnóstico Experiência" },
  { id: 5, label: "Dados: Mentoria" },
  { id: 6, label: "Gestão Complexidade" },
  { id: 7, label: "Domínio Imediato" },
  { id: 8, label: "Domínio Técnico II" },
  { id: 9, label: "Engenharia Profunda" },
  { id: 10, label: "Acolhimento & Conexão" },
  { id: 11, label: "Trilhas por Perfil" },
  { id: 12, label: "Matriz Evolutiva" },
  { id: 13, label: "Impacto & ROI" },
  { id: 14, label: "Deploy Ready" },
  { id: 15, label: "Fontes e Referências" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex h-screen bg-bg-dark text-white font-sans overflow-hidden relative items-center justify-center">
      {/* Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red z-50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        initial={{ width: 0 }}
        animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Animated Mesh Background with Spotlight */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600 filter blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-fuchsia-600 filter blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500 filter blur-[120px]"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative w-[95%] h-[92%] bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/20 shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8 shrink-0">
          <div className="flex items-center gap-4">
            <img
              src={PROGNUM_LOGO}
              alt="Prognum Logo"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight uppercase font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Prognum
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <span>OB</span>
            <span>2026</span>
            <div className="px-4 py-1.5 bg-white/10 rounded-full border border-white/10 text-white text-[10px] tracking-widest font-display">CONFIDENCIAL</div>
          </div>
        </header>

        <div className="flex flex-1 min-h-0">
          {/* Sidebar Navigation */}
          <nav className="w-[260px] h-full border-r border-white/10 p-6 overflow-y-auto hidden lg:block shrink-0">
            {SLIDES.map((slide) => (
              <div
                key={slide.id}
                role="button"
                tabIndex={0}
                onClick={() => setCurrentSlide(slide.id)}
                onKeyDown={(e) => e.key === 'Enter' && setCurrentSlide(slide.id)}
                className={`nav-item ${currentSlide === slide.id ? 'active' : ''}`}
              >
                {slide.label}
              </div>
            ))}
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 relative overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto px-12 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full flex flex-col justify-center"
                >
                  {(() => {
                    const SlideComponent = slideComponentMap[currentSlide];
                    return SlideComponent ? (
                      <Suspense fallback={<div className="flex justify-center items-center h-full text-white/50 uppercase tracking-widest font-display text-sm animate-pulse">Carregando Slide...</div>}>
                        <SlideComponent setSlide={setCurrentSlide} />
                      </Suspense>
                    ) : (
                      <div className="glass-card text-center py-16 px-10 max-w-2xl mx-auto border-dashed border-white/20">
                        <h2 className="text-3xl text-white/50 font-display font-bold mb-4 uppercase">
                          [ Slide em Construção ]
                        </h2>
                        <p className="text-slate-400">O arquivo para esta tela ainda não foi criado ou descomentado no mapa de slides.</p>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sub-navigation controls in footer style */}
            <footer className="px-12 py-6 border-t border-white/10 bg-white/5 flex justify-between items-center shrink-0">
              <div className="flex gap-10">
                <div className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity" onClick={prevSlide}>
                  <span className="text-[10px] text-white/40 uppercase font-display tracking-widest">Anterior</span>
                  <span className="text-sm text-white/70">{SLIDES[(currentSlide - 1 + SLIDES.length) % SLIDES.length].label}</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity text-right md:text-left" onClick={nextSlide}>
                  <span className="text-[10px] text-white/40 uppercase font-display tracking-widest">Próximo</span>
                  <span className="text-sm text-white/70">{SLIDES[(currentSlide + 1) % SLIDES.length].label}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <button
                    onClick={toggleFullScreen}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                    title="Tela Cheia"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-xs font-mono">
                  <span className="text-white">{(currentSlide + 1).toString().padStart(2, '0')}</span>
                  <span className="text-white/20"> / </span>
                  <span className="text-white/20">{SLIDES.length.toString().padStart(2, '0')}</span>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
