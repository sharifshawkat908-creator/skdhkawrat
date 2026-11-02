import { config } from '../config';

export function Button({
  children,
  href = config.CTA_URL,
  variant = 'primary',
  size = 'md',
  disabled = false,
  external = false,
  className = '',
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-casino-dark';
  const variants = {
    primary:
      'bg-casino-neon text-white shadow-[0_0_20px_rgba(176,42,142,0.5)] hover:bg-casino-neon/90 hover:shadow-neon-lg focus:ring-casino-neon',
    outline:
      'bg-transparent border border-casino-border/60 text-casino-ink hover:bg-casino-surfaceHover hover:border-casino-borderHover focus:ring-casino-border',
    ghost:
      'bg-transparent text-casino-neon hover:bg-casino-neon/10 focus:ring-casino-neon',
  };
  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-xl',
  };

  const handleClick = (_e) => {
    if (disabled) return;
    onClick?.();
  };

  const isLink = !!href;
  const Component = isLink ? 'a' : 'button';

  return (
    <Component
      {...(isLink
        ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined }
        : { type: 'button', onClick: handleClick })}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
