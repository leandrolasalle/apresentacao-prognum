import { motion } from 'motion/react';

export default function Slide13() {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div className="max-w-4xl mx-auto">
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-12 uppercase text-center font-display tracking-tighter font-bold">
                {Array.from("Impacto & ROI").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-neon-blue/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="glass-card relative border-t-2 border-neon-blue p-10 flex flex-col items-center">
                        <div className="text-7xl font-display font-bold text-white mb-2 tracking-tighter">+40%</div>
                        <div className="w-12 h-1 bg-neon-blue mb-6" />
                        <h3 className="text-xl text-white font-bold mb-2 uppercase tracking-wide">Performance Inicial</h3>
                        <p className="text-center text-sm text-slate-400 leading-relaxed max-w-[250px]">
                            Aceleração da adaptação e redução do tempo até que o novo colaborador comece a gerar valor.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-neon-purple/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="glass-card relative border-t-2 border-neon-purple p-10 flex flex-col items-center">
                        <div className="text-7xl font-display font-bold text-white mb-2 tracking-tighter">-82%</div>
                        <div className="w-12 h-1 bg-neon-purple mb-6" />
                        <h3 className="text-xl text-white font-bold mb-2 uppercase tracking-wide">Risco de Turnover</h3>
                        <p className="text-center text-sm text-slate-400 leading-relaxed max-w-[250px]">
                            Maior engajamento e menor ansiedade técnica nos primeiros meses de integração.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                    Baseline: entrevista com meus amigos de trabalho
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                    Metodologia: Brandon Hall Group & SHRM
                </div>
            </motion.div>
        </div>
    );
}