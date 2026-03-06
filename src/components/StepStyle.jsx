import StepHeader from './StepHeader';
import { styleOptions } from '../data/constants';

function StylePreview({ style, isActive, onClick }) {
    const isDark = ['bold-dark', 'luxury-elegant', 'vibrant-gradient'].includes(style.id);

    return (
        <button
            className={`group relative style-card p-3 rounded-2xl text-center transition-all duration-300 ${isActive ? 'active ring-2 ring-brand-accent ring-offset-4 ring-offset-brand-dark scale-[1.02]' : 'hover:scale-[1.02] border-brand-border'}`}
            onClick={onClick}
            aria-pressed={isActive}
            aria-label={`Select ${style.label} style`}
        >
            {/* Browser Mockup */}
            <div
                className="relative h-32 rounded-xl mb-4 flex flex-col overflow-hidden shadow-2xl transition-transform"
                style={{
                    backgroundColor: style.bgColor,
                    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                }}
            >
                {/* Browser Header */}
                <div className={`h-6 w-full flex items-center px-2 gap-1 border-b ${isDark ? 'border-white/5 bg-white/5' : 'border-black/5 bg-black/5'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                    <div className="ml-auto flex gap-2">
                        <div className={`w-6 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                        <div className={`w-3 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-3 flex flex-col gap-2 flex-1">
                    {/* Hero Section */}
                    <div className="space-y-1.5">
                        <div className="h-2 w-3/4 rounded" style={{ backgroundColor: style.barColor }} />
                        <div className="h-1 w-1/2 rounded-full opacity-30" style={{ backgroundColor: style.barColor }} />
                        <div className="h-3 w-8 rounded-sm mt-1" style={{ backgroundColor: style.barColor }} />
                    </div>

                    {/* Features Grid */}
                    <div className="mt-auto grid grid-cols-3 gap-1.5">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-1">
                                <div className="aspect-square w-full rounded-sm opacity-20" style={{ backgroundColor: style.barColor }} />
                                <div className="h-0.5 w-full rounded-full opacity-10" style={{ backgroundColor: style.barColor }} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Selection Overlay (Moved outside overflow-hidden) */}
            {isActive && (
                <div className="absolute top-1 right-1 w-6 h-6 bg-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.9)] border-2 border-brand-dark z-30 animate-in zoom-in duration-300">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}

            <span className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                {style.label}
            </span>
        </button>
    );
}

export default function StepStyle({ selectedId, onSelect }) {
    return (
        <section className="space-y-6 animate-fade-up delay-200">
            <StepHeader
                number={3}
                title="Choisissez un style"
                subtitle="Cela définit l'apparence et l'ambiance générale"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {styleOptions.map((style) => (
                    <StylePreview
                        key={style.id}
                        style={style}
                        isActive={selectedId === style.id}
                        onClick={() => onSelect(style.id)}
                    />
                ))}
            </div>
        </section>
    );
}
