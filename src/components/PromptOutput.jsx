import { useState } from 'react';
import { ClipboardCopy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { countWords } from '../utils/promptGenerator';

export default function PromptOutput({ prompt }) {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const wordCount = countWords(prompt);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = prompt;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    }

    return (
        <section className="space-y-6 pt-12 animate-fade-up delay-500">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
                <div className="flex items-center gap-2 text-brand-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                    Votre Prompt
                </div>
                <div className="text-gray-500">{wordCount} mots</div>
            </div>

            <div className="relative group">
                <div
                    className={`bg-brand-card border border-brand-border rounded-xl p-6 text-sm text-gray-400 prompt-output relative ${expanded ? '' : 'max-h-48 overflow-hidden'
                        }`}
                >
                    <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed">
                        {prompt}
                    </pre>

                    {!expanded && (
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-card to-transparent flex items-end justify-center pb-4">
                            <button
                                onClick={() => setExpanded(true)}
                                className="text-xs text-gray-300 bg-gray-800/80 px-3 py-1 rounded hover:bg-gray-700 transition cursor-pointer flex items-center gap-1"
                            >
                                <ChevronDown size={12} />
                                Développer
                            </button>
                        </div>
                    )}
                </div>

                {expanded && (
                    <div className="flex justify-center mt-2">
                        <button
                            onClick={() => setExpanded(false)}
                            className="text-xs text-gray-300 bg-gray-800/80 px-3 py-1 rounded hover:bg-gray-700 transition cursor-pointer flex items-center gap-1"
                        >
                            <ChevronUp size={12} />
                            Réduire
                        </button>
                    </div>
                )}

                <button
                    id="copy-prompt-btn"
                    onClick={handleCopy}
                    className={`w-full mt-4 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${copied
                        ? 'bg-brand-emerald text-white shadow-glow'
                        : 'bg-white text-black hover:bg-gray-100 shadow-glow'
                        }`}
                >
                    {copied ? (
                        <>
                            <Check size={20} />
                            Copié !
                        </>
                    ) : (
                        <>
                            <ClipboardCopy size={20} />
                            Copier le Prompt
                        </>
                    )}
                </button>
            </div>
        </section>
    );
}
