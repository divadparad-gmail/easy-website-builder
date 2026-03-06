export function generatePrompt({ description, businessType, style, sections, ctaText }) {
    const styleName = style ? style.label : 'Clean & Modern';
    const sectionList = sections.map((s, i) => `${i + 1}. ${s.name}`).join(', ');
    const buttonText = ctaText || 'Get Started';
    const businessDesc = businessType || '';

    const parts = [
        `Build me a beautiful, complete, single-page website.`,
        ``,
        `**What it's for:** ${description || '[Describe your website/business here]'}`,
        businessDesc ? `**Type of business:** ${businessDesc}` : '',
        `**Design style:** ${styleName}`,
        `**Main button text:** "${buttonText}"`,
        ``,
        `**Page sections (in this exact order):**`,
        ...sections.map((s, i) => `${i + 1}. ${s.name} — ${s.desc || s.name}`),
        ``,
        `**Design requirements:**`,
        `- Use the "${styleName}" design style throughout`,
        `- Make it fully responsive (mobile-first)`,
        `- Include smooth scroll animations`,
        `- Use a consistent color palette that matches the style`,
        `- Add hover effects on interactive elements`,
        `- Ensure strong visual hierarchy with proper spacing`,
        `- Use high-quality placeholder images where needed`,
        `- Include proper meta tags and SEO structure`,
        ``,
        `**Typography:**`,
        `- Use modern, clean fonts (e.g., Inter, Plus Jakarta Sans)`,
        `- Clear heading hierarchy (h1 > h2 > h3)`,
        `- Readable body text (16px minimum)`,
        ``,
        `**Additional notes:**`,
        `- The "${buttonText}" CTA should be prominently placed above the fold and repeated near the bottom`,
        `- Use realistic placeholder text (not Lorem Ipsum)`,
        `- All sections should feel cohesive and connected`,
        `- The overall feel should be professional and conversion-focused`,
    ];

    return parts.filter(Boolean).join('\n');
}

export function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}
