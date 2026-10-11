import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-teal-dark',
  secondary: 'bg-navy text-cream hover:bg-navy-light',
  ghost: 'bg-transparent text-navy hover:bg-navy/5 border border-navy/15',
};

const baseStyles =
  'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200';

export default function Button({
  children,
  variant = 'primary',
  href = '#',
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  );
}

export function ButtonWithArrow({
  children,
  ...props
}: ButtonProps) {
  return (
    <Button {...props}>
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </Button>
  );
}
