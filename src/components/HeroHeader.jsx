export default function HeroHeader() {
    return (
        <header className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
            <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                        alt="David Paradis"
                        className="w-full h-full object-cover"
                        src="/logo_david.png"
                    />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                Construisez votre <br />
                <span className="text-gradient">site parfait</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
                Choisissez votre style. Sélectionnez vos sections.
                <br />
                Obtenez un prompt prêt à coller pour n'importe quel constructeur IA.
            </p>
        </header>
    );
}
