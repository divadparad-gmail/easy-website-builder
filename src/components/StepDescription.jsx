import StepHeader from './StepHeader';

export default function StepDescription({ value, onChange }) {
    return (
        <section className="space-y-6 animate-fade-up">
            <StepHeader number={1} title="À quoi sert le site web ?" />
            <textarea
                id="website-description"
                aria-label="Website description"
                className="w-full h-32 rounded-xl p-4 text-gray-300 resize-none text-sm"
                placeholder="ex. Une page de destination pour mon cabinet dentaire à Montréal qui propose le blanchiment des dents et la dentisterie esthétique..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </section>
    );
}
