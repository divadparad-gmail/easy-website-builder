export default function StepHeader({ number, title, subtitle }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-9 h-9 spin-border-wrap shrink-0">
                <div className="spin-border-inner text-brand-accent font-bold text-sm">
                    {number}
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{title}</h2>
                {subtitle && (
                    <span className="text-xs text-gray-500">{subtitle}</span>
                )}
            </div>
        </div>
    );
}
