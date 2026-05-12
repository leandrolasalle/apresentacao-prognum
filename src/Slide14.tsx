import { Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide14({ setSlide }: { setSlide: (n: number) => void }) {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div className="text-center max-w-2xl mx-auto">
            <Rocket className="mx-auto text-neon-blue mb-6 animate-pulse" size={80} />
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl mb-4 font-display font-bold tracking-tight">
                {Array.from("READY FOR DEPLOY").map((char, index) => <motion.span key={index} variants={letterVariants}>{char === " " ? "\u00A0" : char}</motion.span>)}
            </motion.h2>
            <div className="w-32 h-1 bg-neon-purple mx-auto mb-8" />
            <p className="text-xl text-slate-400 mb-12">
                O Onboarding sincroniza conhecimento e rotina.
            </p>
            <button className="btn text-xl px-12 py-4" onClick={() => setSlide(0)}>
                REINICIAR
            </button>
        </div>
    );
}