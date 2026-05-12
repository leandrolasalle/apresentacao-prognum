import { motion } from 'motion/react';

export default function Slide15() {
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
                {Array.from("Fontes e Referências").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-card p-6 border-l-2 border-neon-blue"
                >
                    <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">Metodologia &amp; Retenção</h3>
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="glass-card p-6 border-l-2 border-neon-purple"
                >
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
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12 glass-card p-6 border-dashed border-white/10 text-center"
            >
                <p className="text-xs text-slate-400">
                    Dados internos baseados na <span className="text-white font-bold">entrevista com meus amigos de trabalho</span>.
                </p>
            </motion.div>
        </div>
    );
}