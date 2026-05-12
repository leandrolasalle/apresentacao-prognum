import { motion } from 'motion/react';

export default function Slide12() {
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
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 uppercase text-center font-display tracking-tight font-bold">
                {Array.from("Matriz Evolutiva (DE / PARA)").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
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
                            <td className="p-5 text-white font-bold">Micro-learning &amp; Pílulas de Shock</td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-5 text-white font-bold text-xs uppercase tracking-widest">Apoio</td>
                            <td className="p-5 text-slate-500 font-light italic">Autodidatismo Solitário</td>
                            <td className="p-5 text-white font-bold">Sistema de Shadowing &amp; Buddy Ativo</td>
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
}