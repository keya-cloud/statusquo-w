import { FormEvent, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

const recipientEmail = 'statusquo.org.in@gmail.com';

export default function ClosingCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const profileVision = String(form.get('profileVision') ?? '');
    const linkedin = String(form.get('linkedin') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`New StatusQuo enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\n\nWhat they want their profile to look like:\n${profileVision}\n\nMessage:\n${message}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-32">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-light">Start a conversation</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-cream text-balance lg:text-5xl">
            Got something you're working on?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/60 lg:text-lg">
            Tell us a little about it… we'd love to hear what you have in mind
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-cream p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-navy">Your name</span>
              <input required name="name" type="text" autoComplete="name" className="contact-input mt-2" placeholder="Jane Smith" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-navy">Your email</span>
              <input required name="email" type="email" autoComplete="email" className="contact-input mt-2" placeholder="jane@company.com" />
            </label>
          </div>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-navy">What do you want your profile to look like?</span>
            <textarea required name="profileVision" rows={3} className="contact-input mt-2 resize-none" placeholder="The reputation, opportunities, and ideas you want to be known for..." />
          </label>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-navy">Your LinkedIn profile</span>
            <input required name="linkedin" type="url" className="contact-input mt-2" placeholder="https://linkedin.com/in/you" />
          </label>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-navy">Message</span>
            <textarea required name="message" rows={4} className="contact-input mt-2 resize-none" placeholder="Tell us a little about what you are working on..." />
          </label>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className={`text-sm ${submitted ? 'text-teal-dark' : 'text-navy/50'}`} aria-live="polite">
              {submitted ? 'Your enquiry has been sent.' : 'We will get back to you shortly.'}
            </p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2">
              Let's talk
              <Send size={16} />
              <ArrowUpRight size={14} className="-ml-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
