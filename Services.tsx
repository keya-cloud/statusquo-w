import { Compass, PenLine, TrendingUp, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    number: '01',
    title: 'Positioning & Voice',
    description:
      'We define what makes your perspective unique and craft a voice that sounds like you on your best day, not a corporate template.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Content & Ghostwriting',
    description:
      'Weekly posts and carousels written in your voice, grounded in your real experience, and designed to start conversations with the right people.',
    icon: PenLine,
  },
  {
    number: '03',
    title: 'Publishing & Improvement',
    description:
      'We handle the publishing cadence, track what resonates, and refine the approach month over month so your content compounds.',
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            Services
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
            Got the ideas but not the time to post about them?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60">
            From figuring out your voice to turning half formed thoughts into posts people want to read, we help you make LinkedIn feel a little less like a chore
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
          >
            Explore all services
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
