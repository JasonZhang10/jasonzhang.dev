import clsx from 'clsx';

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose prose-sm prose-blue max-w-none prose-p:text-secondary prose-headings:text-primary'
      )}
    >
      {children}
    </div>
  );
}
