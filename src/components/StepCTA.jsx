import StepHeader from './StepHeader';

export default function StepCTA({ value, onChange }) {
    return (
        <section className="space-y-6 animate-fade-up delay-400">
            <StepHeader
                number={5}
                title="Que doit dire le bouton ?"
                subtitle="L'action principale que vous souhaitez que les visiteurs effectuent"
            />
            <input
                id="cta-text"
                type="text"
                aria-label="CTA button text"
                className="w-full rounded-xl p-4 text-gray-300 text-sm"
                placeholder="ex. Réserver une consultation gratuite, Obtenir un devis, Démarrer l'essai gratuit"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </section>
    );
}
