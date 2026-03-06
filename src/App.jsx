import { useState, useMemo } from 'react';
import { Heart } from 'lucide-react';
import HeroHeader from './components/HeroHeader';
import StepDescription from './components/StepDescription';
import StepBusiness from './components/StepBusiness';
import StepStyle from './components/StepStyle';
import StepSections from './components/StepSections';
import StepCTA from './components/StepCTA';
import PromptOutput from './components/PromptOutput';
import CTAFooter from './components/CTAFooter';
import { defaultSections, styleOptions } from './data/constants';
import { generatePrompt } from './utils/promptGenerator';

export default function App() {
  const [description, setDescription] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [customBusiness, setCustomBusiness] = useState('');
  const [selectedStyleId, setSelectedStyleId] = useState('clean-modern');
  const [sections, setSections] = useState(defaultSections);
  const [ctaText, setCtaText] = useState('');

  const businessType = customBusiness || selectedBusiness;
  const selectedStyle = styleOptions.find((s) => s.id === selectedStyleId);

  const prompt = useMemo(
    () =>
      generatePrompt({
        description,
        businessType,
        style: selectedStyle,
        sections,
        ctaText,
      }),
    [description, businessType, selectedStyle, sections, ctaText]
  );

  function handleBusinessSelect(label) {
    setSelectedBusiness(label);
    setCustomBusiness('');
  }

  function handleCustomBusinessChange(value) {
    setCustomBusiness(value);
    if (value) setSelectedBusiness('');
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-0">
      <HeroHeader />

      <main className="w-full max-w-2xl space-y-24 pb-24">
        <StepDescription value={description} onChange={setDescription} />

        <StepBusiness
          selected={selectedBusiness}
          onSelect={handleBusinessSelect}
          customValue={customBusiness}
          onCustomChange={handleCustomBusinessChange}
        />

        <StepStyle
          selectedId={selectedStyleId}
          onSelect={setSelectedStyleId}
        />

        <StepSections
          sections={sections}
          onSectionsChange={setSections}
        />

        <StepCTA value={ctaText} onChange={setCtaText} />

        <PromptOutput prompt={prompt} />

        <CTAFooter />
      </main>

      <footer className="py-12 text-gray-500 text-xs flex items-center gap-1.5">
        Fait avec <Heart size={12} className="text-brand-pink fill-brand-pink" /> par David Paradis
      </footer>
    </div>
  );
}
