import { motion } from 'motion/react';

export default function FaseSlide({ phase, color, items, justification }: { phase: string, color: string, items: { title: string, desc: string }[], justification: string }) {
    const borderColor = color === 'neon-blue' ? 'border-l-neon-blue' : color === 'neon-purple' ? 'border-l-neon-purple' : 'border-l-neon-red';
    const tileBorder = color === 'neon-blue' ? '!border-neon-blue' : color === 'neon-purple' ? '!border-neon-purple' : '!border-neon-red';

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-5xl mx-auto">
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 uppercase text-center font-display font-bold">
                {Array.from(phase).map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>
                ))}
            </motion.h2>
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
                        &quot;{justification}&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}