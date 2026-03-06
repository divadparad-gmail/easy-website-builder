import { ArrowUpRight } from 'lucide-react';

export default function CTAFooter() {
    return (
        <section className="text-center space-y-8 pt-12 animate-fade-up" id="cta-section">
            <p className="text-xs text-gray-400 font-medium">
                Collez dans{' '}
                <span className="text-white font-semibold">
                    Lovable, Bolt, AntiGravity AI Studio, v0
                </span>
                , ou n'importe quel constructeur IA
            </p>

            <div className="rainbow-line" />

            <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Continuez à défiler
                </p>
                <div className="text-brand-purple text-xl animate-gentle-bounce">↓</div>
            </div>

            <div className="pt-12 space-y-6">
                <h2 className="text-3xl font-bold">Allez plus loin</h2>
                <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    Rejoignez la communauté pour les systèmes IA, les automations et les
                    sites web qui fonctionnent vraiment.
                </p>

                {/* Feature Card */}
                <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden border border-brand-border bg-brand-card p-1 shadow-2xl">
                    <div className="relative h-64 bg-gradient-to-br from-brand-surface to-brand-dark rounded-xl border border-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="flex gap-2">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded flex items-center justify-center text-xl">
                                    🤖
                                </div>
                                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded flex items-center justify-center text-xl">
                                    ✨
                                </div>
                                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded flex items-center justify-center text-xl">
                                    🚀
                                </div>
                            </div>
                            <div className="relative h-32 w-32 rounded-full overflow-hidden">
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_20px_rgba(0,0,0,0.5)] z-10" />
                                <img
                                    alt="David Paradis"
                                    className="h-full w-full object-cover"
                                    src="/logo_david.png"
                                    style={{
                                        maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="absolute top-6 left-6 text-left">
                            <h3 className="text-4xl font-black italic text-white uppercase leading-none">
                                Systèmes IA
                                <br />
                                Éprouvés
                            </h3>
                        </div>
                    </div>
                </div>

                <a
                    href="https://systematixquebec.sharepoint.com/sites/ClubSocial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient text-white font-bold py-3 px-8 rounded-xl inline-flex items-center gap-2 cursor-pointer"
                >
                    Rejoindre la Communauté
                    <ArrowUpRight size={18} />
                </a>
            </div>
        </section>
    );
}
