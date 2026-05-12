import TimelineNode from './TimelineNode';
import { motion } from 'motion/react';

export default function Slide06() {
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
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 text-center uppercase tracking-widest font-display font-bold">
                {Array.from("Arquitetura de Aprendizado").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
            <div className="glass-card border-t-2 border-neon-purple mb-10 text-center py-6 px-10">
                <p className="text-xl text-white">
                    <strong>PRINCÍPIO:</strong> Priorizar o <span className="text-neon-blue font-bold">entendimento do produto e do fluxo de trabalho</span> como base para o desenvolvimento técnico e para uma <span className="text-neon-purple font-bold">atuação de alta performance</span>.
                </p>
            </div>

            <div className="relative flex flex-col md:flex-row justify-between gap-6 pt-10 mt-10">
                <div className="hidden md:block absolute top-14 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-transparent z-0 opacity-20" />

                <TimelineNode
                    dotColor="neon-blue"
                    period="D0 - D15"
                    title="FUNDAMENTOS"
                    items={["Visão geral do produto SCCI", "Fluxo das demandas", "Estrutura das áreas e responsabilidades"]}
                />
                <TimelineNode
                    dotColor="neon-purple"
                    period="D15 - D45"
                    title="EVOLUÇÃO TÉCNICA"
                    items={["Matemática financeira", "Regras regulatórias", "Lógica de cálculos"]}
                />
                <TimelineNode
                    dotColor="neon-red"
                    period="D45+"
                    title="ESPECIALIZAÇÃO"
                    items={["Desenvolvimento em Pascal e React", "Arquitetura do sistema", "Otimização de framework e testes"]}
                />
            </div>
        </div>
    );
}