import { motion } from 'motion/react';

export default function Slide11() {
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
                {Array.from("Trilhas por Perfil").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
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
}