import { useEffect, useState } from 'react';

const steps = [
    { id: 'top', label: 'Top' },
    { id: 'divider-1', isDivider: true },
    { id: 'step-1', label: '1. Description' },
    { id: 'step-2', label: '2. Domaine' },
    { id: 'step-3', label: '3. Look & Feel' },
    { id: 'step-4', label: '4. Structure' },
    { id: 'step-5', label: '5. Bouton' },
    { id: 'step-prompt', label: 'Terminal IA' },
    { id: 'divider-2', isDivider: true },
    { id: 'cta-footer', label: 'Allez plus loin' }
];

export default function ScrollSpy() {
    const [activeId, setActiveId] = useState('step-1');

    useEffect(() => {
        // L'IntersectionObserver détecte l'élément qui traverse l'écran
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            // rootMargin: la zone de déclenchement est environ au milieu (haut) de l'écran
            { rootMargin: '-20% 0px -60% 0px' }
        );

        steps.forEach((step) => {
            const element = document.getElementById(step.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Défilement doux avec un petit décalage (offset) de 100px pour l'entête
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block group">
            {/* Ajout du cadre arrondi, fond vitré et bordure teintée (visible uniquement au hover) */}
            <div className="flex flex-col items-end gap-4 py-5 pr-5 pl-8 rounded-3xl border-2 border-transparent group-hover:border-white group-hover:bg-brand-dark/40 group-hover:backdrop-blur-md group-hover:shadow-[0_0_35px_rgba(192,132,252,0.8),inset_0_0_15px_rgba(192,132,252,0.4)] transition-all duration-300">
                {steps.map((step) => {
                    if (step.isDivider) {
                        return <div key={step.id} className="w-full h-[1px] bg-white/10 my-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />;
                    }

                    const isActive = activeId === step.id;
                    const isExtra = step.id === 'top' || step.id === 'cta-footer';

                    return (
                        <button
                            key={step.id}
                            onClick={(e) => handleClick(e, step.id)}
                            aria-label={`Aller à : ${step.label}`}
                            className="group/btn flex items-center justify-end gap-3 h-5 outline-none cursor-pointer"
                        >
                            <span
                                className={`text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 origin-right opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                                    ${isActive ? 'text-brand-pink drop-shadow-[0_0_8px_rgba(219,70,233,0.3)]' :
                                        isExtra ? 'text-gray-400 group-hover/btn:text-white' : 'text-gray-500 group-hover/btn:text-gray-300'}`}
                            >
                                {step.label}
                            </span>

                            <span
                                className={`transition-all duration-300 rounded-full
                                    ${isActive
                                        ? 'w-7 h-1 bg-gradient-to-r from-brand-purple to-brand-pink shadow-[0_0_12px_rgba(219,70,233,0.6)]'
                                        : isExtra ? 'w-0' : 'w-2 h-1 bg-slate-700 group-hover/btn:w-4 group-hover/btn:bg-slate-500'}`}
                            />
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
