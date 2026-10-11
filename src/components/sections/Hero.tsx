import { Calendar, ArrowRight, TrendingUp, Users, Eye } from 'lucide-react';
import Button from '@/components/ui/Button';

const heroPortrait = 'https://images.pexels.com/photos/7905813/pexels-photo-7905813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const floatingStats = [
  { icon: Eye, value: '762K+', label: 'Impressions', position: 'left' },
  { icon: Users, value: '5.8K+', label: 'Followers gained', position: 'bottom' },
  { icon: TrendingUp, value: '38%', label: 'Best month growth', position: 'right' },
];

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal/5 blur-[120px]" />
        <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full bg-navy/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-teal/3 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="flex max-w-2xl flex-col justify-center hero-text-enter">
            <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-teal/20 bg-teal/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-xs font-medium tracking-wide text-teal-dark">
                Personal Branding & LinkedIn Content
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy text-balance lg:text-5xl xl:text-[3.5rem]">
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

            <div className="mt-10 flex items-center gap-5 border-t border-navy/10 pt-6">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/5448239/pexels-photo-5448239.jpeg?auto=compress&cs=tinysrgb&h=100&w=100', 'https://images.pexels.com/photos/7710091/pexels-photo-7710091.jpeg?auto=compress&cs=tinysrgb&h=100&w=100', 'https://images.pexels.com/photos/8837807/pexels-photo-8837807.jpeg?auto=compress&cs=tinysrgb&h=100&w=100'].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-cream object-cover object-center" />
                ))}
              </div>
              <p className="text-sm text-navy/55">
                Trusted by founders & operators who want to be <span className="font-semibold text-navy">seen for what they know</span>
              </p>
            </div>
          </div>

          <div className="relative hero-visual-enter hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-teal/15 to-navy/10" aria-hidden="true" />
              <div className="absolute inset-0 rotate-2 rounded-[2rem] border border-navy/8" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 shadow-[0_30px_80px_-30px_rgba(11,30,51,0.35)]">
                <img
                  src={heroPortrait}
                  alt="Confident professional building their personal brand"
                  className="h-[540px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {floatingStats.map((stat, i) => {
                const Icon = stat.icon;
                const positionClasses: Record<string, string> = {
                  left: '-left-12 top-16',
                  bottom: 'left-1/2 -translate-x-1/2 -bottom-6',
                  right: '-right-10 top-1/3',
                };
                const animationClass: Record<string, string> = {
                  left: 'animate-float-slow',
                  bottom: 'animate-float-medium',
                  right: 'animate-float-slow',
                };
                return (
                  <div
                    key={i}
                    className={`absolute ${positionClasses[stat.position]} ${animationClass[stat.position]} rounded-2xl border border-navy/10 bg-white/95 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(11,30,51,0.25)] backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold leading-none text-navy">{stat.value}</p>
                        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-navy/50">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
