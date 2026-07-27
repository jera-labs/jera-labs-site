type SkipToContentProps = {
  label: string;
};

export function SkipToContent({ label }: SkipToContentProps) {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-sm bg-tech-teal px-4 py-2 text-sm font-medium text-deep-graphite opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory-white"
    >
      {label}
    </a>
  );
}
