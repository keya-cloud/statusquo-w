import type { LucideIcon } from 'lucide-react';

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
    <div className="group relative flex flex-col rounded-2xl border border-navy/10 bg-cream-light p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-[0_8px_30px_-12px_rgba(11,30,51,0.12)]">
      <div className="mb-6 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-teal transition-colors duration-200 group-hover:bg-teal/10">
          <Icon size={20} />
        </span>
        <span className="font-display text-sm font-600 text-navy/25">
          {number}
        </span>
      </div>
      <h3 className="font-display text-xl font-600 text-navy">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/60">
        {description}
      </p>
    </div>
  );
}
