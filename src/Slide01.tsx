import { Users, Handshake, Network } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide01() {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] uppercase font-display font-bold">
                {Array.from("Visão Macro Estratégica").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
            <div className="glass-card mb-8 border-t-2 border-neon-blue p-8">
                <h3 className="text-neon-blue text-xl mb-4 uppercase tracking-widest font-bold">Oportunidade de Otimização</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                    A Prognum tem muito conhecimento estruturado. O desafio é apresentar cada conteúdo no momento certo, para que o novo colaborador aprenda melhor e ganhe autonomia mais rapidamente.
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
                    <p className="text-[10px] text-slate-500 mt-2">Aprendizado na prática, com acompanhamento e observação guiada de atividades reais.</p>
                </div>
                <div className="tile">
                    <Network className="mx-auto mb-3 text-neon-purple" size={32} />
                    <p className="font-semibold text-white uppercase text-xs tracking-wider">Fluidez de Fluxo</p>
                    <p className="text-[10px] text-slate-500 mt-2">Conexão imediata entre a teoria do sistema e a rotina do time.</p>
                </div>
            </div>
        </div>
    );
}