import { Brain } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide03() {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold">
        {Array.from("Saturação de Conhecimento").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card border-neon-blue p-10 flex flex-col justify-center text-left transition-transform hover:scale-[1.02]">
          <Brain className="text-neon-blue mb-5" size={40} />
          <h3 className="text-neon-blue text-2xl mb-4 italic font-bold">Sobrecarga Cognitiva</h3>
          <p className="text-lg leading-relaxed text-white font-light">
            Conteúdos técnicos complexos são apresentados cedo demais, <span className="text-neon-red font-bold">dificultando a assimilação</span> e reduzindo o aproveitamento do aprendizado.
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
}