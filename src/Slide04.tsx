import { motion } from 'motion/react';

export default function Slide04() {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-6 uppercase font-display font-bold tracking-tight">
                {Array.from("Análise de Saturação").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>
                ))}
            </motion.h2>
            <div className="inline-block bg-neon-blue/10 border border-neon-blue px-4 py-1 rounded text-xs text-neon-blue font-bold mb-8 uppercase tracking-widest">
                DIAGNÓSTICO TÁTICO: EXPERIÊNCIA DO NOVO COLABORADOR
            </div>
            <div className="glass-card border-t-4 border-neon-red p-10 text-left bg-white/5">
                <h3 className="text-white text-lg mb-10 tracking-[0.2em] font-bold uppercase">Indicadores de Sobrecarga</h3>
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Saturação de informações</span>
                        <span className="text-neon-red font-bold">100% SATURAÇÃO</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full border border-border overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] w-full" />
                    </div>
                    <p className="text-xs text-slate-500 mt-3 font-light italic">Grande volume de conteúdo nos primeiros dias, acima da capacidade natural de absorção.</p>
                </div>
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Exaustão cognitiva</span>
                        <span className="text-neon-red font-bold">EXAUSTÃO COGNITIVA</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full border border-border overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)] w-full" />
                    </div>
                    <p className="text-xs text-slate-500 mt-3 font-light italic">Materiais longos e sem aplicação prática imediata tornam o aprendizado cansativo e reduzem o engajamento.</p>
                </div>
            </div>
        </div>
    );
}