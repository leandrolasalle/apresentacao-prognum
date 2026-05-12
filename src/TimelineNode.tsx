export default function TimelineNode({ dotColor, period, title, items }: { dotColor: string, period: string, title: string, items: string[] }) {
    const colorMap: Record<string, string> = {
        'neon-blue': 'border-neon-blue text-neon-blue',
        'neon-purple': 'border-neon-purple text-neon-purple',
        'neon-red': 'border-neon-red text-neon-red',
    };

    const bgMap: Record<string, string> = {
        'neon-blue': 'bg-neon-blue shadow-[0_0_15px_rgba(34,211,238,0.5)]',
        'neon-purple': 'bg-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]',
        'neon-red': 'bg-neon-red shadow-[0_0_15px_rgba(239,68,68,0.5)]',
    };

    return (
        <div className="flex-1 relative z-10 text-center mb-10 md:mb-0">
            <div className={`w-8 h-8 rounded-full border-4 bg-bg-dark mx-auto mb-4 flex items-center justify-center ${colorMap[dotColor]}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${bgMap[dotColor]}`} />
            </div>
            <span className={`font-display font-bold text-lg ${colorMap[dotColor]}`}>{period}</span>
            <div className="glass-card mt-4 p-5 text-left border-t-2">
                <h4 className={`text-base mb-3 ${colorMap[dotColor]}`}>{title}</h4>
                <ul className="text-xs text-slate-400 space-y-2">
                    {items.map((it, i) => <li key={i}>• {it}</li>)}
                </ul>
            </div>
        </div>
    );
}