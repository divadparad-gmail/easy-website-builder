import StepHeader from './StepHeader';
import { businessTypes } from '../data/constants';

export default function StepBusiness({ selected, onSelect, customValue, onCustomChange }) {
    return (
        <section className="space-y-6 animate-fade-up delay-100">
            <StepHeader number={2} title="Quel type d'entreprise ?" />
            <p className="text-sm text-gray-500 -mt-4">Choisissez-en un ou tapez le vôtre ci-dessous</p>
            <div className="flex flex-wrap gap-2">
                {businessTypes.map((bt) => (
                    <button
                        key={bt.label}
                        className={`chip px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${selected === bt.label ? 'active' : ''
                            }`}
                        onClick={() => onSelect(bt.label)}
                        aria-pressed={selected === bt.label}
                    >
                        <span>{bt.emoji}</span> {bt.label}
                    </button>
                ))}
            </div>
            <input
                id="custom-business"
                type="text"
                aria-label="Custom business type"
                className="w-full rounded-xl p-4 text-gray-300 text-sm"
                placeholder="Ou tapez autre chose..."
                value={customValue}
                onChange={(e) => onCustomChange(e.target.value)}
            />
        </section>
    );
}
