interface LogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'dark',
  showTagline = false,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <a href="#" className={`group inline-flex flex-col items-start ${className}`} aria-label="StatusQuo home">
      <img
        src="/images/statusquo-wordmark.png"
        alt="StatusQuo"
        className={`h-auto w-[150px] transition-transform duration-200 group-hover:scale-[1.02] ${isLight ? 'brightness-0 invert' : ''}`}
      />
      {showTagline && (
        <span className={`mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-white' : 'text-navy'}`}>
          Clarity Creates Opportunity
        </span>
      )}
    </a>
  );
}
