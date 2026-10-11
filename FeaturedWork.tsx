import { ArrowUpRight, ExternalLink, MoreHorizontal } from 'lucide-react';

const elsaPortrait = '/images/Screenshot_2026-10-10_012828.png';
const davidPortrait = '/images/Screenshot_2026-10-10_013040.png';

interface WorkPreviewProps {
  name: string;
  role: string;
  postUrl: string;
  screenshot?: string;
  avatar?: string;
  description: string;
  postLines: string[];
  headline?: string;
  newsletter?: string;
}

const featuredWork: WorkPreviewProps[] = [
  {
    name: 'David Stepania',
    role: 'Founder @ ThirstySprout: vetted remote AI & engineering teams | ...',
    postUrl: 'https://lnkd.in/p/d6mzA9M6',
    avatar: davidPortrait,
    newsletter: 'View my newsletter',
    description: 'A perspective-led post about the scale and implications of AI investment.',
    postLines: [
      'Elon Musk calls BS on the $500B AI investment that OpenAI announced',
      "He says that this group doesn't even have $10B to invest.",
      "Seems like Elon is panicking, and here's why.",
      "It's become clear that AGI is definitely cooking in the background - confirmed by insiders and experts in the AI space alike.",
      'This $500B Bet Changes Everything and puts Sam Altman / OpenAI ahead in the global AI race & dominance.',
      'Think about this:',
      '166 out of 195 countries have a GDP smaller than this single AI investment.',
      "But here's the deal:\n• Smart Companies aren't just throwing $500B at some buzzword\n• OpenAI staff are \"jazzed and spooked\" by recent progress and what it might mean for humanity\n• Initial $100B already committed; they'll raise the other $400B easily with the support of the White House",
    ],
  },
  {
    name: 'Elsa Ibarra',
    role: 'Partnerships @ ChoppingBlock.ai',
    postUrl: 'https://lnkd.in/p/dPSHvb7Y',
    avatar: elsaPortrait,
    description: 'A LinkedIn post on fast-growing AI startups in healthtech.',
    postLines: [
      'Curious about AI healthtech opportunities?',
      "Here's a list of 15 fast-growing AI startups in healthtech that raised funding, and some are even hiring",
      'Prosper AI - Phone agents that handle scheduling, billing and prior authorizations for healthcare providers.',
      'BranchLab - Turns healthcare data into audiences that pharma marketers can actually reach.',
      'Optura.AI - Measures the return healthcare organizations are getting on the AI they\'ve already bought.',
      'Onos Health - Closes the data gap health plans have around behavioral healthcare.',
      'UrgentIQ - Electronic medical records and clinical operations software built specifically for urgent care centers.',
      'Graph AI - Operating system for pharmacovigilance teams monitoring drug safety at pharmaceutical companies.',
      'InsideDesk - Automates dental insurance claims and payments for multi-specialty practices.',
    ],
  },
];

function LinkedInHeader({ work }: { work: WorkPreviewProps }) {
  const initials = work.name.split(' ').map((part) => part.charAt(0)).join('').slice(0, 2);

  return (
    <div className="flex items-start justify-between gap-3 border-b border-[#e5e7eb] bg-white px-5 py-4">
      <div className="flex min-w-0 items-start gap-3">
        {work.avatar ? (
          <img
            src={work.avatar}
            alt={`${work.name} portrait`}
            className="h-11 w-11 shrink-0 rounded-full border border-[#e5e7eb] object-cover object-center mix-blend-multiply"
          />
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-cream">
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#191919]">
            {work.name}
            <span className="rounded-sm bg-[#f3a847] px-0.5 text-[10px] font-bold leading-4 text-white">in</span>
            <span className="text-xs font-normal text-[#777777]">· 2nd</span>
          </div>
          <div className="max-w-[280px] truncate text-xs text-[#666666]">{work.role}</div>
          {work.newsletter && <div className="text-xs font-semibold text-[#0a66c2]">{work.newsletter}</div>}
          <div className="text-xs text-[#8a8a8a]">1y · Edited</div>
        </div>
      </div>
      <div className="flex shrink-0 items-center text-[#0a66c2]">
        <MoreHorizontal size={20} className="text-[#555555]" aria-hidden="true" />
      </div>
    </div>
  );
}

function PostContent({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-4 px-5 py-5 text-[15px] leading-relaxed text-[#252525]">
      {lines.map((line) => (
        <p key={line} className="whitespace-pre-line">{line}</p>
      ))}
    </div>
  );
}

function WorkPreviewCard({ work }: { work: WorkPreviewProps }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_45px_-22px_rgba(11,30,51,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_55px_-20px_rgba(11,30,51,0.24)]">
      <div className="flex items-center justify-between border-b border-navy/8 bg-navy px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-light">Our Work</span>
        <span className="text-xs text-cream/55">LinkedIn post</span>
      </div>

      <LinkedInHeader work={work} />

      {work.screenshot ? (
        <div className="relative bg-white px-3 py-3 sm:px-5">
          <img
            src={work.screenshot}
            alt={`${work.name} LinkedIn post`}
            className="h-auto w-full rounded border border-[#e5e7eb]"
          />
          <div className="pointer-events-none absolute right-3 top-3 h-12 w-32 bg-white sm:right-5" aria-hidden="true" />
        </div>
      ) : (
        <div className="mx-3 my-3 overflow-hidden rounded border border-[#e5e7eb] bg-white sm:mx-5">
          <PostContent lines={work.postLines} />
        </div>
      )}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <p className="text-sm leading-relaxed text-navy/60">{work.description}</p>
        <a
          href={work.postUrl}
          target="_blank"
          rel="noreferrer"
          className="group/link mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
        >
          View original post
          <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      </div>

      <div className="flex items-center justify-between border-t border-navy/8 px-5 py-3.5 text-xs text-navy/40">
        <span>Client example</span>
        <ExternalLink size={14} />
      </div>
    </article>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-cream-dark/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-teal">Featured Work</span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
              A few things we've put out into the world
            </h2>

          </div>
          <a
            href="#work"
            className="group flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
          >
            Explore all our work
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
          {featuredWork.map((work) => (
            <WorkPreviewCard key={work.name} work={work} />
          ))}
        </div>

      </div>
    </section>
  );
}
