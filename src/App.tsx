<<<<<<< HEAD
import { useState, useEffect, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGNUM_LOGO } from './assets/logo';
import {
  ChevronLeft,
  ChevronRight,
  Maximize
} from 'lucide-react';
import { slideComponentMap } from './mapping';
=======
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGNUM_LOGO } from './assets/logo';
import { 
  Users, 
  Handshake, 
  Network, 
  TriangleAlert, 
  Brain, 
  Rocket, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19

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
<<<<<<< HEAD
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
=======

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
<<<<<<< HEAD
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
=======
  }, []);

  return (
    <div className="flex h-screen bg-bg-dark text-white font-sans overflow-hidden relative items-center justify-center">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600 filter blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-fuchsia-600 filter blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500 filter blur-[120px]"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative w-[95%] h-[92%] bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/20 shadow-2xl flex flex-col overflow-hidden">
<<<<<<< HEAD

        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8 shrink-0">
          <div className="flex items-center gap-4">
            <img
              src={PROGNUM_LOGO}
              alt="Prognum Logo"
=======
        
        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8 shrink-0">
          <div className="flex items-center gap-4">
            <img 
              src={PROGNUM_LOGO} 
              alt="Prognum Logo" 
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
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
<<<<<<< HEAD
                role="button"
                tabIndex={0}
                onClick={() => setCurrentSlide(slide.id)}
                onKeyDown={(e) => e.key === 'Enter' && setCurrentSlide(slide.id)}
=======
                onClick={() => setCurrentSlide(slide.id)}
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
                className={`nav-item ${currentSlide === slide.id ? 'active' : ''}`}
              >
                {slide.label}
              </div>
            ))}
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 relative overflow-hidden flex flex-col">
<<<<<<< HEAD

=======
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
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
<<<<<<< HEAD
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
=======
                  {renderSlideContent(currentSlide, setCurrentSlide)}
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
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
<<<<<<< HEAD
                  <button
                    onClick={toggleFullScreen}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                    title="Tela Cheia"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                  <button
=======
                  <button 
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
<<<<<<< HEAD
                  <button
=======
                  <button 
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
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
<<<<<<< HEAD
=======

function renderSlideContent(id: number, setSlide: (n: number) => void) {
  switch (id) {
    case 0:
      return (
        <div className="glass-card text-center border-2 py-16 px-10 max-w-4xl mx-auto">
          <p className="text-neon-blue tracking-[12px] text-sm font-display font-bold mb-4 uppercase">[ Planejamento Estratégico ]</p>
          <h1 className="text-5xl md:text-7xl leading-tight mb-5 text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] font-display">
            ARQUITETURA DE<br />ONBOARDING
          </h1>
          <div className="w-20 h-1 bg-neon-purple mx-auto my-6" />
          <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
            Maximizando o <span className="text-white font-medium">Capital Intelectual</span> através da transição entre <span className="text-neon-blue font-semibold">Contexto Funcional</span> e <span className="text-neon-purple font-semibold">Exatidão Técnica</span>.
          </p>
        </div>
      );
    case 1:
      return (
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl text-neon-blue mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] uppercase font-display font-bold">Visão Macro Estratégica</h2>
          <div className="glass-card mb-8 border-t-2 border-neon-blue p-8">
            <h3 className="text-neon-blue text-xl mb-4 uppercase tracking-widest font-bold">Oportunidade de Otimização</h3>
            <p className="text-lg leading-relaxed text-slate-200">
              A Prognum detém um ecossistema robusto de conhecimento. O salto qualitativo reside na <strong>calibragem entre o volume de informações e a curva de aplicabilidade</strong>, garantindo retenção máxima e autonomia acelerada.
            </p>
          </div>
          <h3 className="text-white text-lg mb-6 tracking-[0.3em] font-light">EIXOS DE EVOLUÇÃO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="tile">
              <Users className="mx-auto mb-3 text-neon-purple" size={32} />
              <p className="font-semibold text-white uppercase text-xs tracking-wider">Hiper-Segmentação</p>
              <p className="text-[10px] text-slate-500 mt-2">Trilhas de aprendizado customizadas por núcleo de atuação.</p>
            </div>
            <div className="tile !border-neon-blue">
              <Handshake className="mx-auto mb-3 text-neon-blue" size={32} />
              <p className="font-semibold text-white uppercase text-xs tracking-wider">Prática Cognitiva</p>
              <p className="text-[10px] text-slate-500 mt-2">Aprendizado baseado em aplicação real e shadowing guiado.</p>
            </div>
            <div className="tile">
              <Network className="mx-auto mb-3 text-neon-purple" size={32} />
              <p className="font-semibold text-white uppercase text-xs tracking-wider">Fluidez de Fluxo</p>
              <p className="text-[10px] text-slate-500 mt-2">Conexão imediata entre a teoria do sistema e a rotina do time.</p>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold">Raio-X: Desafios de Imersão</h2>
          <div className="glass-card border-2 border-neon-red shadow-[0_0_30px_rgba(239,68,68,0.2)] p-10 relative overflow-hidden text-left">
            <TriangleAlert className="absolute -top-4 -right-4 text-neon-red/5 rotate-15" size={140} />
            <h3 className="text-neon-red text-2xl mb-5 tracking-widest font-bold">LACUNAS DE SINCRONICIDADE</h3>
            <p className="text-xl leading-snug text-white mb-8 font-light">
              O modelo vigente privilegia a <span className="text-neon-red font-bold">transmissão enciclopédica do sistema</span>, antecedendo a compreensão fundamental do <span className="text-neon-blue font-bold">ecossistema operacional e fluxos de demanda</span>.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-red to-transparent mb-8" />
            <div className="border-l-4 border-neon-red bg-neon-red/5 p-6 rounded-r-lg">
              <p className="text-lg italic text-slate-300">
                "Detemos o domínio da ferramenta, mas o colaborador demora a compreender a engrenagem lógica que move as nossas entregas diárias."
              </p>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold">Saturação de Conhecimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card border-neon-blue p-10 flex flex-col justify-center text-left transition-transform hover:scale-[1.02]">
              <Brain className="text-neon-blue mb-5" size={40} />
              <h3 className="text-neon-blue text-2xl mb-4 italic font-bold">Sobrecarga Cognitiva</h3>
              <p className="text-lg leading-relaxed text-white font-light">
                Conceitos técnicos de alta complexidade são injetados <span className="text-neon-red font-bold">sem o substrato prático</span>, colapsando a capacidade de assimilação estratégica.
              </p>
            </div>
            <div className="glass-card border-neon-purple p-10 flex flex-col justify-center text-left transition-transform hover:scale-[1.02]">
              <div className="mb-4">
                <span className="text-6xl md:text-8xl font-display font-extrabold text-white leading-none">80%</span>
                <span className="block text-sm text-neon-purple uppercase tracking-[0.3em] font-bold mt-1">Erosão Prematura</span>
              </div>
              <h3 className="text-white text-xl mb-2 italic">A Curva do Esquecimento</h3>
              <p className="text-base text-slate-400 font-light">
                A ausência de aplicação prática imediata condena o conhecimento técnico refinado ao <strong>esquecimento em janelas de 30 dias</strong>.
              </p>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl text-neon-blue mb-6 uppercase font-display font-bold tracking-tight">Análise de Saturação</h2>
          <div className="inline-block bg-neon-blue/10 border border-neon-blue px-4 py-1 rounded text-xs text-neon-blue font-bold mb-8 uppercase tracking-widest">
            DIAGNÓSTICO TÁTICO: EXPERIÊNCIA DO NOVO COLABORADOR
          </div>
          <div className="glass-card border-t-4 border-neon-red p-10 text-left bg-white/5">
            <h3 className="text-white text-lg mb-10 tracking-[0.2em] font-bold uppercase">Indicadores de Sobrecarga</h3>
            
            <div className="mb-10">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Volume de Dados vs. Janela de Absorção</span>
                <span className="text-neon-red font-bold">100% SATURAÇÃO</span>
              </div>
              <div className="h-4 bg-white/5 rounded-full border border-border overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] w-full" />
              </div>
              <p className="text-xs text-slate-500 mt-3 font-light italic">O volume de informações agnósticas à rotina ultrapassa o limite biológico de retenção nas primeiras 72 horas.</p>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Extensão do Material vs. Curva de Atenção</span>
                <span className="text-neon-red font-bold">EXAUSTÃO COGNITIVA</span>
              </div>
              <div className="h-4 bg-white/5 rounded-full border border-border overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] w-full" />
              </div>
              <p className="text-xs text-slate-500 mt-3 font-light italic">Materiais de longa duração sem aplicação prática imediata atuam como barreiras de engajamento.</p>
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold tracking-tight">O Elo da Eficiência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tile !border-neon-red p-10 bg-white/5 transition-all hover:bg-white/10 group">
              <h3 className="text-xl text-white mb-4 italic font-bold">Disponibilidade Mentor-Buddy</h3>
              <div className="text-7xl font-display font-bold text-neon-red mb-4 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-sm text-slate-400 font-light">
                Dos novos talentos relatam <span className="text-white font-bold">ausência de suporte consultivo</span> pontual durante a execução de tarefas práticas.
              </p>
            </div>
            <div className="tile p-10 bg-white/5 transition-all hover:bg-white/10 group">
              <h3 className="text-xl text-white mb-4 italic font-bold">Eficácia de Conteúdo</h3>
              <div className="text-7xl font-display font-bold text-neon-purple mb-4 group-hover:scale-110 transition-transform">32%</div>
              <p className="text-sm text-slate-400 font-light">
                Apenas um terço do conteúdo técnico é <span className="text-white font-bold">efetivamente convertido em ação</span> nas primeiras duas semanas.
              </p>
            </div>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-10 text-center uppercase tracking-widest font-display font-bold">Arquitetura de Aprendizado</h2>
          <div className="glass-card border-t-2 border-neon-purple mb-10 text-center py-6 px-10">
            <p className="text-xl text-white">
              <strong>MANDATO:</strong> Priorizar a <span className="text-neon-blue font-bold">Consciência de Produto e Fluxo</span> como alicerce para a <span className="text-neon-purple font-bold">Engenharia de Alta Performance</span>.
            </p>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between gap-6 pt-10 mt-10">
            <div className="hidden md:block absolute top-14 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-transparent z-0 opacity-20" />
            
            <TimelineNode 
              dotColor="neon-blue" 
              period="D0 - D15" 
              title="FUNDAMENTAL" 
              items={["Ecossistema de Produto SCCI", "Fluxo Decisório de Tasks", "Arquitetura de Áreas"]} 
            />
            <TimelineNode 
              dotColor="neon-purple" 
              period="D15 - D45" 
              title="LOGICAL PROFICIENCY" 
              items={["Inteligência Financeira", "Governança SCC (Regulatórios)", "Modelagem de Cálculos"]} 
            />
            <TimelineNode 
              dotColor="neon-red" 
              period="D45+" 
              title="CORE MASTERY" 
              items={["Engenharia (Pascal/React)", "Microarquitetura SCCI", "Otimização de Framework"]} 
            />
          </div>
        </div>
      );
    case 7:
      return (
        <FaseSlide 
          phase="CONSCIÊNCIA FUNCIONAL (ROTINA)"
          color="neon-blue"
          items={[
            { title: "Mapeamento do Produto SCCI", desc: "Visão sistêmica da entrega de valor ao cliente final." },
            { title: "Ciclo de Vida de Demandas", desc: "Fluxo de governança de tasks: da concepção ao deploy." },
            { title: "Navegação e Consultoria", desc: "Domínio de extração de dados e interpretação de relatórios base." }
          ]}
          justification="A compreensão do 'PORQUÊ' e do 'PARA QUEM' precede a codificação. Esta fase elimina o retrabalho causado por falta de contexto de negócio."
        />
      );
    case 8:
      return (
        <FaseSlide 
          phase="INTELIGÊNCIA DE NEGÓCIO (LÓGICA)"
          color="neon-purple"
          items={[
            { title: "Fundamentos Financeiros", desc: "Lógica de juros, amortização e fluxos de capital no SCCI." },
            { title: "Governança Regulatória", desc: "Compliance e normas críticas (IOF, 3050, Anexo 16)." },
            { title: "Modelagem de Especialidade", desc: "Mecânicas de Cessão, FGTS e estruturação de Séries." }
          ]}
          justification="Nossas regras de negócio são o núcleo de nossa vantagem competitiva. Elas exigem familiaridade funcional prévia para serem absorvidas com precisão cirúrgica."
        />
      );
    case 9:
      return (
        <FaseSlide 
          phase="EXCELÊNCIA CORE (ENGENHARIA)"
          color="neon-red"
          items={[
            { title: "Stack Tecnológica Avançada", desc: "Domínio de Pascal, React Native e ecossistemas internos." },
            { title: "Arquitetura e Escopo Profundo", desc: "Imersão na engenharia do core SCC e Framework Corpweb." },
            { title: "Evolução e Refatoração", desc: "Desenvolvimento de alta performance e otimização de sistemas críticos." }
          ]}
          justification="O código é o instrumento de materialização da regra. Nesta etapa, o colaborador já possui o 'pensamento Prognum', permitindo inovações seguras no core do sistema."
        />
      );
    case 10:
      return (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase text-center font-display tracking-tight border-b-2 border-neon-blue/20 pb-4 font-bold">Acolhimento & Conexão <br/><span className="text-3xl opacity-60">(Fator Humano)</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="glass-card p-8 bg-white/5 border-t-2 border-neon-blue">
              <h3 className="text-white text-lg mb-6 uppercase tracking-widest font-bold">Fator Humano: O Catalisador</h3>
              <PillarItem color="neon-blue" title="DIRETRIZES DO CEO" desc="Alinhamento macro entre o propósito do colaborador e o impacto social da Prognum." />
              <PillarItem color="neon-purple" title="IMERSÃO DE LIDERANÇA" desc="Briefing tático do Diretor sobre a cultura de entrega e excelência do time." />
              <PillarItem color="neon-blue" title="KIT DE BOAS VINDAS" desc="Materialização física da entrada no ecossistema e ferramentas de integração." />
              <PillarItem color="neon-blue" title="PROTOCOLO 'BUDDY'" desc="Apoio técnico e social por um veterano, mitigando a ansiedade de performance inicial." />
            </div>
            <div className="tile !border-neon-blue flex flex-col justify-center p-10 bg-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-2xl text-white mb-6 uppercase tracking-tighter font-bold z-10">Cultura vs. Performance</h4>
              <p className="text-lg text-slate-300 leading-relaxed font-light z-10">
                O acolhimento estruturado dissolve barreiras de comunicação, permitindo que o foco total do talento seja direcionado à <span className="text-white font-bold">resolução de problemas</span> desde o primeiro dia.
              </p>
            </div>
          </div>
        </div>
      );
    case 11:
      return (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase text-center font-display tracking-tight font-bold">Trilhas por Perfil</h2>
          <div className="glass-card overflow-hidden border-t-2 border-neon-blue bg-white/5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/20">
                  <th className="p-5 text-left font-display text-white uppercase tracking-[0.2em] text-xs font-bold">Perfil Alvo</th>
                  <th className="p-5 text-left font-display text-white uppercase tracking-[0.2em] text-xs font-bold">Foco Estratégico (T+30 dias)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold uppercase tracking-wider text-xs">Analista de Sistemas</td>
                  <td className="p-5 text-slate-400 font-light">Levantamento de Requisitos, Fluxos Funcionais e Governança de Tasks SCCI.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold uppercase tracking-wider text-xs">Software Engineering</td>
                  <td className="p-5 text-slate-400 font-light">Setup de Ambiente, Padrões de Código Prognum e Resolução de Tasks de Baixa Complexidade.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold uppercase tracking-wider text-xs">Quality Assurance</td>
                  <td className="p-5 text-slate-400 font-light">Matriz de Testes, Regressão, Homologação e Critérios de Aceite SCCI.</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold uppercase tracking-wider text-xs">Business Intelligence</td>
                  <td className="p-5 text-slate-400 font-light">Regras de Negócio Primárias (SCC), Atendimento e Consultoria de Dados.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 12:
      return (
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-10 uppercase text-center font-display tracking-tight font-bold">Matriz Evolutiva (DE / PARA)</h2>
          <div className="glass-card overflow-hidden border-t-2 border-neon-blue bg-white/5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/20">
                  <th className="p-5 text-left font-display text-white/40 uppercase tracking-[0.2em] text-xs font-bold">Dimensão</th>
                  <th className="p-5 text-left font-display text-neon-red uppercase tracking-[0.2em] text-xs font-bold">Situação Atual</th>
                  <th className="p-5 text-left font-display text-neon-blue uppercase tracking-[0.2em] text-xs font-bold">Onboarding</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold text-xs uppercase tracking-widest">Metodologia</td>
                  <td className="p-5 text-slate-500 font-light italic">Imersão Massiva Simultânea</td>
                  <td className="p-5 text-white font-bold">Aprendizado Granular Progressivo</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold text-xs uppercase tracking-widest">Entrega</td>
                  <td className="p-5 text-slate-500 font-light italic">Documentação Unilateral</td>
                  <td className="p-5 text-white font-bold">Micro-learning & Pílulas de Shock</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold text-xs uppercase tracking-widest">Apoio</td>
                  <td className="p-5 text-slate-500 font-light italic">Autodidatismo Solitário</td>
                  <td className="p-5 text-white font-bold">Sistema de Shadowing & Buddy Ativo</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 text-white font-bold text-xs uppercase tracking-widest">Core Focus</td>
                  <td className="p-5 text-slate-500 font-light italic">Engenharia de Sistemas SCC</td>
                  <td className="p-5 text-white font-bold">Negócio, Fluxo e Rotina Operacional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 13:
      return (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-12 uppercase text-center font-display tracking-tighter font-bold">Impacto & ROI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Metric 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-neon-blue/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="glass-card relative border-t-2 border-neon-blue p-10 flex flex-col items-center">
                <div className="text-7xl font-display font-bold text-white mb-2 tracking-tighter">+40%</div>
                <div className="w-12 h-1 bg-neon-blue mb-6" />
                <h3 className="text-xl text-white font-bold mb-2 uppercase tracking-wide">Performance Inicial</h3>
                <p className="text-center text-sm text-slate-400 leading-relaxed max-w-[250px]">
                  Aceleração do Time-to-Value através da entrega escalonada de complexidade.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-neon-purple/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="glass-card relative border-t-2 border-neon-purple p-10 flex flex-col items-center">
                <div className="text-7xl font-display font-bold text-white mb-2 tracking-tighter">-82%</div>
                <div className="w-12 h-1 bg-neon-purple mb-6" />
                <h3 className="text-xl text-white font-bold mb-2 uppercase tracking-wide">Risco de Turnover</h3>
                <p className="text-center text-sm text-slate-400 leading-relaxed max-w-[250px]">
                  Aumento do engajamento e redução da ansiedade técnica nos primeiros 90 dias.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              Baseline: entrevista com meus amigos de trabalho
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              Metodologia: Brandon Hall Group & SHRM
            </div>
          </div>
        </div>
      );
    case 14:
      return (
        <div className="text-center max-w-2xl mx-auto">
          <Rocket className="mx-auto text-neon-blue mb-6 animate-pulse" size={80} />
          <h2 className="text-5xl md:text-7xl mb-4 font-display font-bold tracking-tight">READY FOR DEPLOY</h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto mb-8" />
          <p className="text-xl text-slate-400 mb-12">
            O Onboarding sincroniza conhecimento e rotina.
          </p>
          <button className="btn text-xl px-12 py-4" onClick={() => setSlide(0)}>
            REINICIAR
          </button>
        </div>
      );
    case 15:
      return (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl text-neon-blue mb-12 uppercase text-center font-display tracking-tighter font-bold">Fontes e Referências</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-l-2 border-neon-blue">
              <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">Metodologia & Retenção</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.brandonhall.com/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline block mb-1">
                    Brandon Hall Group - The Power of Onboarding
                  </a>
                  <p className="text-slate-500 text-[11px]">Estudo sobre o impacto do onboarding estruturado na retenção de talentos (+82%).</p>
                </li>
                <li>
                  <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline block mb-1">
                    SHRM Foundation - Onboarding New Employees
                  </a>
                  <p className="text-slate-500 text-[11px]">Guia para maximizar o sucesso de novos contratados e produtividade precoce.</p>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 border-l-2 border-neon-purple">
              <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">Ciência do Aprendizado</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://en.wikipedia.org/wiki/Forgetting_curve" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline block mb-1">
                    Curva de Esquecimento (Hermann Ebbinghaus)
                  </a>
                  <p className="text-slate-500 text-[11px]">Base teórica para a distribuição de conteúdo em pílulas (Micro-learning) e reforço prático.</p>
                </li>
                <li>
                  <a href="https://www.hbr.org/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline block mb-1">
                    Harvard Business Review - Culture & Performance
                  </a>
                  <p className="text-slate-500 text-[11px]">Artigos sobre a importância do acolhimento (social onboarding) na performance de times tech.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 glass-card p-6 border-dashed border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Dados internos baseados na <span className="text-white font-bold">entrevista com meus amigos de trabalho</span>.
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function TimelineNode({ dotColor, period, title, items }: { dotColor: string, period: string, title: string, items: string[] }) {
  const colorMap: any = {
    'neon-blue': 'border-neon-blue text-neon-blue',
    'neon-purple': 'border-neon-purple text-neon-purple',
    'neon-red': 'border-neon-red text-neon-red',
  };
  
  const bgMap: any = {
    'neon-blue': 'bg-neon-blue shadow-[0_0_15px_rgba(34,211,238,0.5)]',
    'neon-purple': 'bg-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]',
    'neon-red': 'bg-neon-red shadow-[0_0_15px_rgba(239,68,68,0.5)]',
  };

  return (
    <div className="flex-1 relative z-10 text-center mb-10 md:mb-0">
      <div className={`w-8 h-8 rounded-full border-4 bg-bg-dark mx-auto mb-4 flex items-center justify-center ${colorMap[dotColor]}`}>
        <div className={`w-2.5 h-2.5 rounded-full ${bgMap[dotColor]}`} />
      </div>
      <span className={`font-display font-bold text-lg ${colorMap[dotColor]}`}>{period}</span>
      <div className="glass-card mt-4 p-5 text-left border-t-2">
        <h4 className={`text-base mb-3 ${colorMap[dotColor]}`}>{title}</h4>
        <ul className="text-xs text-slate-400 space-y-2">
          {items.map((it, i) => <li key={i}>• {it}</li>)}
        </ul>
      </div>
    </div>
  );
}

function FaseSlide({ phase, color, items, justification }: { phase: string, color: string, items: { title: string, desc: string }[], justification: string }) {
  const colorClass = color === 'neon-blue' ? 'border-neon-blue text-neon-blue' : color === 'neon-purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-red text-neon-red';
  const borderColor = color === 'neon-blue' ? 'border-l-neon-blue' : color === 'neon-purple' ? 'border-l-neon-purple' : 'border-l-neon-red';
  const tileBorder = color === 'neon-blue' ? '!border-neon-blue' : color === 'neon-purple' ? '!border-neon-purple' : '!border-neon-red';

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-6xl text-neon-blue mb-10 uppercase text-center font-display font-bold">{phase}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className={`glass-card p-8 border-l-4 ${borderColor}`}>
          <h3 className="text-lg text-white mb-6 uppercase italic">Conteúdos Prioritários</h3>
          {items.map((item, i) => (
            <div key={i} className="mb-4 last:mb-0 border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <p className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{item.title}</p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={`tile ${tileBorder} flex flex-col justify-center p-8 bg-slate-900/50`}>
          <h4 className="text-lg text-white mb-4 italic uppercase">Justificativa</h4>
          <p className="text-lg text-slate-300 italic leading-relaxed">
            "{justification}"
          </p>
        </div>
      </div>
    </div>
  );
}

function PillarItem({ color, title, desc }: { color: string, title: string, desc: string }) {
  const colorClass = color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-purple';
  return (
    <div className="bg-white/5 p-4 mb-3 rounded-lg border border-white/5">
      <span className={`font-bold block text-sm mb-1 ${colorClass}`}>• {title}</span>
      <p className="text-xs text-slate-400">{desc}</p>
    </div>
  );
}
>>>>>>> 0c45fc9285af95408cefc30789fabedbce3f2d19
