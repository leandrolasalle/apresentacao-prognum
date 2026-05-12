import { motion } from 'motion/react';

export default function Slide05() {
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
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold tracking-tight">
                {Array.from("O Elo da Eficiência").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="tile !border-neon-red p-10 bg-white/5 transition-all hover:bg-white/10 group"
                >
                    <h3 className="text-xl text-white mb-4 italic font-bold">Disponibilidade Mentor-Buddy</h3>
                    <div className="text-7xl font-display font-bold text-neon-red mb-4 group-hover:scale-110 transition-transform">100%</div>
                    <p className="text-sm text-slate-400 font-light">
                        <span className="text-white font-bold">Suporte no dia a dia:</span> novos colaboradores sentem falta de um mentor ou buddy para tirar dúvidas durante o Onboarding.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="tile p-10 bg-white/5 transition-all hover:bg-white/10 group"
                >
                    <h3 className="text-xl text-white mb-4 italic font-bold">Eficácia de Conteúdo</h3>
                    <div className="text-7xl font-display font-bold text-neon-purple mb-4 group-hover:scale-110 transition-transform">32%</div>
                    <p className="text-sm text-slate-400 font-light">
                        <span className="text-white font-bold">Aplicação do conteúdo:</span> apenas parte do conteúdo técnico é realmente utilizada nas primeiras semanas.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}