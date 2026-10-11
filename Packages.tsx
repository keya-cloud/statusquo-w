import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type PackagePlan = {
  name: string;
  title: string;
  description: string;
  cadence: string;
  cadenceDescription: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

const plans: PackagePlan[] = [
  {
    name: 'Starter',
    title: 'Build your presence.',
    description: 'For professionals who want to start showing up consistently on LinkedIn.',
    cadence: '2 posts per week',
    cadenceDescription: '8 posts in a typical four-week month.',
    features: [
      '2 LinkedIn text posts per week',
      'Basic content planning and topic ideas',
      'Copywriting and post editing',
      'Basic brand voice alignment',
      'One round of revisions per post',
    ],
  },
  {
    name: 'Growth',
    title: 'Make your expertise visible.',
    description: 'For professionals ready to share stronger ideas and build a recognisable voice.',
    cadence: '2 posts per week',
    cadenceDescription: 'A mix of text and visual content.',
    features: [
      '1 text-only post per week',
      '1 text + image post per week',
      'Content themes and monthly planning',
      'Deeper positioning and brand voice development',
      'Custom visuals for image posts',
      'Basic performance review and content recommendations',
    ],
  },
  {
    name: 'Elevate',
    title: 'Own your presence.',
    description: 'For founders and professionals who want their LinkedIn presence managed end to end.',
    cadence: 'Full LinkedIn profile and management',
    cadenceDescription: 'Strategy, content, publishing, and ongoing optimisation.',
    features: [
      'LinkedIn profile audit and optimisation',
      'Personal brand strategy and positioning',
      'Strategic content creation (text, visuals & carousels)',
      'Content scheduling and publishing',
      'Engagement and comment management',
      'Performance tracking and monthly review',
      'Ongoing support and strategy calls',
    ],
    highlighted: true,
    badge: 'Most effective',
  },
];

export default function Packages() {
  const [selectedPlan, setSelectedPlan] = useState('Elevate');

  return (
    <section id="packages" className="border-t border-navy/10 bg-cream py-16 lg:py-24" aria-labelledby="packages-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-dark">Packages</span>
          </div>
          <h2 id="packages-heading" className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-tight text-navy sm:text-5xl">
            Choose a plan that fits your journey.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-[1.35] text-navy/60 sm:text-base">
            Whether you&apos;re just starting to show up or ready to take your LinkedIn to the next level, our packages are designed to meet you where you are and help you grow with clarity.
          </p>
        </div>

        <div className="mt-8 grid gap-1.5 md:grid-cols-3 md:gap-1">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex cursor-pointer flex-col rounded-xl border bg-white/35 p-6 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 ${selectedPlan === plan.name ? 'border-teal border-2 bg-teal/[0.025] shadow-[0_0_0_3px_rgba(30,158,150,0.12)] md:-mt-0.5 md:-mb-0.5' : 'border-navy/10 hover:border-teal/45'}`}
              role="button"
              tabIndex={0}
              aria-pressed={selectedPlan === plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedPlan(plan.name);
                }
              }}
            >
              {plan.badge && <span className="absolute right-4 top-3 rounded-full bg-teal px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-white">{plan.badge}</span>}
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-dark">{plan.name}</p>
              <h3 className="mt-3 max-w-[220px] font-display text-2xl font-semibold leading-[1.02] tracking-tight text-navy">{plan.title}</h3>
              <p className="mt-2 min-h-[42px] text-xs leading-[1.35] text-navy/60">{plan.description}</p>

              <div className="mt-4 border-t border-navy/10 pt-3">
                <p className="font-display text-base font-semibold leading-tight text-navy">{plan.cadence}</p>
                <p className="mt-1 text-xs leading-[1.3] text-navy/60">{plan.cadenceDescription}</p>
              </div>

              <ul className="mt-4 flex-1 space-y-2" aria-label={`${plan.name} package features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs leading-[1.25] text-navy/75">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-dark"><Check size={11} strokeWidth={3} /></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" onClick={(event) => event.stopPropagation()} className={`mt-7 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors ${plan.highlighted ? 'border-navy bg-navy text-white hover:bg-navy-light' : 'border-navy/35 bg-transparent text-navy hover:bg-navy/5'}`}>
                Get Started
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 text-center">
          <span className="h-px w-12 bg-navy/20" />
          <p className="font-display text-sm font-semibold text-navy">Packages start from $200.</p>
          <span className="h-px w-12 bg-navy/20" />
        </div>
      </div>
    </section>
  );
}
