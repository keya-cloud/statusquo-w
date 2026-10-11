import { Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Email', href: '#', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-5">
            <Logo variant="light" showTagline />
            <p className="max-w-sm text-sm leading-relaxed text-cream/40">
              A personal branding and LinkedIn content agency helping
              founders, GTM engineers and growth operators get noticed for
              what they already know.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/30">
                Navigate
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-teal-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/30">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-teal-light"
                    >
                      <link.icon size={16} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} StatusQuo. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">Clarity Creates Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
