import { TriangleAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide02() {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-6xl text-neon-blue mb-10 uppercase font-display font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
                {Array.from("Desafios de Imersão").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card border-2 border-neon-red shadow-[0_0_30px_rgba(239,68,68,0.2)] p-10 relative overflow-hidden text-left transition-all hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]"
            >
                <motion.div
                    animate={{ rotate: [15, 25, 15] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 text-neon-red/10"
                >
                    <TriangleAlert size={140} />
                </motion.div>

                <motion.h3 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-neon-red text-2xl mb-5 tracking-widest font-bold uppercase relative z-10">Lacunas de Sincronia</motion.h3>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-xl leading-snug text-white mb-8 font-light relative z-10">
                    O modelo atual prioriza um <span className="text-neon-red font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">grande volume de conteúdo técnico</span> sobre os sistemas antes que o novo colaborador compreenda, de forma clara, como funciona o <span className="text-neon-blue font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">fluxo de trabalho da área</span> e como as demandas percorrem cada etapa até a <span className="text-neon-purple font-bold">entrega</span>.
                </motion.p>
                <motion.div
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-neon-red to-transparent mb-8 origin-left relative z-10"
                />
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="border-l-4 border-neon-red bg-gradient-to-r from-neon-red/10 to-transparent p-6 rounded-r-lg relative z-10"
                >
                    <p className="text-lg italic text-slate-300">
                        &quot;Aprendemos a usar a <span className="text-neon-red font-semibold">ferramenta</span>, mas levamos mais tempo para entender a <span className="text-neon-purple font-semibold">lógica</span> e o <span className="text-neon-blue font-semibold">processo</span> que sustentam as entregas do dia a dia.&quot;
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}