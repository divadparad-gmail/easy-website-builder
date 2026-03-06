import { useEffect, useState } from 'react';

export default function ThemeToggle() {
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
            className="fixed top-6 right-6 z-50 theme-preserve cursor-pointer outline-none drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
            <div className={`relative w-[110px] h-[46px] rounded-full border border-white/20 overflow-hidden shadow-[inset_0_5px_8px_rgba(0,0,0,0.35),0_3px_8px_rgba(0,0,0,0.2)] transition-colors duration-700 ease-in-out
                ${isLight ? 'bg-gradient-to-r from-[#ffd34d] to-[#8db1d8]' : 'bg-gradient-to-r from-[#212739] to-[#3f4a61]'}`}>

                {/* --- JOUR (Nuages & Rayon) --- */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isLight ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Ring du soleil */}
                    <div className="absolute top-[3px] left-[4px] w-[38px] h-[38px] rounded-full bg-[#ffe459] opacity-40 blur-[2px]"></div>
                    <div className="absolute top-[-5px] left-[-4px] w-[54px] h-[54px] rounded-full bg-[#ffe459] opacity-20 blur-[4px]"></div>

                    {/* Nuage 1 */}
                    <div className="absolute right-[5px] top-[14px] opacity-100 scale-[0.85] drop-shadow-sm">
                        <div className="absolute w-4 h-4 bg-white rounded-full top-2 right-8"></div>
                        <div className="absolute w-7 h-7 bg-white rounded-full top-0 right-3"></div>
                        <div className="absolute w-5 h-5 bg-white rounded-full top-2 right-[-2px]"></div>
                        <div className="absolute h-4 w-[34px] bg-white rounded-full top-3 right-0"></div>
                    </div>
                    {/* Nuage 2 (arrière-plan) */}
                    <div className="absolute right-[25px] top-[8px] opacity-60 scale-[0.7] drop-shadow-sm">
                        <div className="absolute w-4 h-4 bg-[#f0f4f8] rounded-full top-2 right-8"></div>
                        <div className="absolute w-7 h-7 bg-[#f0f4f8] rounded-full top-0 right-3"></div>
                        <div className="absolute w-5 h-5 bg-[#f0f4f8] rounded-full top-2 right-[-2px]"></div>
                        <div className="absolute h-4 w-[34px] bg-[#f0f4f8] rounded-full top-3 right-0"></div>
                    </div>
                </div>

                {/* --- NUIT (Étoiles & Halo de lune) --- */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isLight ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Halo de lune arrière */}
                    <div className="absolute top-[-5px] right-[-4px] w-[54px] h-[54px] rounded-full bg-[#cbd5e1] opacity-[0.08] blur-[4px]"></div>
                    <div className="absolute top-[3px] right-[4px] w-[38px] h-[38px] rounded-full bg-[#cbd5e1] opacity-15 blur-[2px]"></div>

                    {/* Étoiles 4-branches inline SVG */}
                    <svg className="absolute top-[10px] left-[15px] w-[8px] h-[8px] animate-pulse" viewBox="0 0 10 10" fill="#e2e8f0"><path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" /></svg>
                    <svg className="absolute top-[28px] left-[20px] w-[5px] h-[5px] opacity-70 animate-pulse delay-100" viewBox="0 0 10 10" fill="#e2e8f0"><path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" /></svg>
                    <svg className="absolute top-[18px] left-[35px] w-[10px] h-[10px] animate-pulse delay-200" viewBox="0 0 10 10" fill="#e2e8f0"><path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" /></svg>
                    <svg className="absolute top-[12px] left-[55px] w-[4px] h-[4px] opacity-50" viewBox="0 0 10 10" fill="#e2e8f0"><path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" /></svg>
                    <svg className="absolute top-[34px] left-[45px] w-[6px] h-[6px] opacity-80" viewBox="0 0 10 10" fill="#e2e8f0"><path d="M5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Q5 5 5 0 Z" /></svg>
                </div>

                {/* --- LA BILLE (Soleil / Lune) --- */}
                <div
                    className={`absolute top-[4px] w-[36px] h-[36px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden z-20 
                        ${isLight ? 'left-[5px] bg-gradient-to-tr from-[#ffdf00] to-[#fff678] shadow-[0_2px_8px_rgba(255,200,0,0.6)]' : 'left-[67px] bg-gradient-to-tr from-[#c8d0df] to-[#f1f5f9] shadow-[0_2px_8px_rgba(0,0,0,0.5)]'}`}
                >
                    {/* Cratères pour la lune (se déplacent et disparaissent en jour) */}
                    <div className={`absolute inset-0 transition-opacity duration-500 delay-100 ${isLight ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                        <div className="absolute top-[6px] left-[8px] w-[8px] h-[8px] bg-[#9ba4b5] rounded-full opacity-60 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"></div>
                        <div className="absolute top-[18px] right-[4px] w-[11px] h-[11px] bg-[#9ba4b5] rounded-full opacity-60 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"></div>
                        <div className="absolute bottom-[4px] left-[10px] w-[6px] h-[6px] bg-[#9ba4b5] rounded-full opacity-50 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"></div>
                    </div>
                </div>
            </div>
        </button>
    );
}
