import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    // Initialiser en vérifiant si le mode light est stocké ou préféré par le système (optionnel),
    // mais par défaut on part sur dark comme demandé.
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isLight]);

    return (
        <button
            onClick={() => setIsLight(!isLight)}
            aria-label="Basculer le thème"
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-brand-surface border border-brand-border hover:border-brand-accent transition-all duration-300 shadow-glow group hover:scale-110 cursor-pointer"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun
                    size={20}
                    className={`absolute text-amber-400 transition-all duration-500 ease-in-out ${isLight ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                />
                <Moon
                    size={20}
                    className={`absolute text-brand-purple transition-all duration-500 ease-in-out ${isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                />
            </div>
        </button>
    );
}
