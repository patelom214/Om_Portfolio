import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow text-xs sm:text-sm">// {eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-ink-300">{subtitle}</p>}
    </Reveal>
  );
}
