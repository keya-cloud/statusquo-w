import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-cream-light p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-[0_14px_45px_-18px_rgba(11,30,51,0.18)] hover:-translate-y-1">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal/0 blur-[60px] transition-all duration-500 group-hover:bg-teal/8" aria-hidden="true" />
      <div className="mb-6 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-teal transition-all duration-200 group-hover:bg-teal group-hover:text-white group-hover:scale-110">
          <Icon size={20} />
        </span>
        <span className="font-display text-sm font-semibold text-navy/20 transition-colors duration-200 group-hover:text-teal/40">
          {number}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-navy">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/60">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn more
        <ArrowUpRight size={14} />
      </span>
    </div>
  );
}
