import { cn } from '@/lib/utils/tailwindMerge';

export function Prose({ children, className }) {
  return (
    <div
      className={cn(
        className,
        'prose prose-sm prose-blue max-w-none prose-p:text-secondary prose-headings:text-primary'
      )}
    >
      {children}
    </div>
  );
}
