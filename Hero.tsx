import { Calendar, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12">
          <div className="flex max-w-3xl flex-col justify-center">
            <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-xs font-medium tracking-wide text-teal-dark">
                Personal Branding & LinkedIn Content
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight text-navy text-balance lg:text-5xl xl:text-[3.5rem]">
              You're good at what you do… so why doesn't LinkedIn show it?
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/60 lg:text-lg">
              You've got the experience, the ideas and the stories… let's do something with them.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/60 lg:text-lg">
              We help founders, GTM engineers and growth operators turn their expertise into LinkedIn content that sounds like them and gets the right people noticing their work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                <Calendar size={16} />
                Book a Call
              </Button>
              <Button href="#work" variant="ghost">
                See Our Work
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
