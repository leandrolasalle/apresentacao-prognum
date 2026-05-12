import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function PillarItem({ color, title, desc }: { color: string, title: string, desc: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const colorMap: Record<string, string> = {
        'neon-blue': 'text-neon-blue',
        'neon-purple': 'text-neon-purple',
        'neon-red': 'text-neon-red',
    };
    const colorClass = colorMap[color] || 'text-white';
    
    return (
        <div 
            className="bg-white/5 p-4 mb-3 rounded-lg border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <span className={`font-bold block text-sm ${colorClass}`}>• {title}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-white/50" />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-xs text-slate-400">{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}