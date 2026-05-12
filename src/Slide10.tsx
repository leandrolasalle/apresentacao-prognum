import PillarItem from './PillarItem';
import { motion } from 'motion/react';

export default function Slide10() {
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
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 uppercase text-center font-display tracking-tight border-b-2 border-neon-blue/20 pb-4 font-bold">
                {Array.from("Acolhimento & Conexão").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
                <br />
                <motion.span variants={letterVariants} className="text-3xl opacity-60">(Fator Humano)</motion.span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass-card p-8 bg-white/5 border-t-2 border-neon-blue"
                >
                    <h3 className="text-white text-lg mb-6 uppercase tracking-widest font-bold">Fator Humano: O Catalisador</h3>
                    <PillarItem color="neon-blue" title="DIRETRIZES DO CEO" desc="Alinhamento macro entre o propósito do colaborador e o impacto social da Prognum." />
                    <PillarItem color="neon-purple" title="IMERSÃO DE LIDERANÇA" desc="Briefing tático do Diretor sobre a cultura de entrega e excelência do time." />
                    <PillarItem color="neon-blue" title="KIT DE BOAS VINDAS" desc="Materialização física da entrada no ecossistema e ferramentas de integração." />
                    <PillarItem color="neon-blue" title="PROTOCOLO 'BUDDY'" desc="Apoio técnico e social por um veterano, mitigando a ansiedade de performance inicial." />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="tile !border-neon-blue flex flex-col justify-center p-10 bg-white/5 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-2xl text-white mb-6 uppercase tracking-tighter font-bold z-10">Cultura vs. Performance</h4>
                    <p className="text-lg text-slate-300 leading-relaxed font-light z-10">
                        O acolhimento estruturado dissolve barreiras de comunicação, permitindo que o foco total do talento seja direcionado à <span className="text-white font-bold">resolução de problemas</span> desde o primeiro dia.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}