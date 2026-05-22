export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-resume-muted uppercase">
      <span className="shrink-0">{children}</span>
      <span className="h-px flex-1 bg-resume-line" />
    </div>
  )
}
