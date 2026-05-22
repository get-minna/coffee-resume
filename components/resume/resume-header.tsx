import type { ResumeData } from "@/lib/resume-data"

interface ResumeHeaderProps {
  meta: ResumeData["meta"]
}

export function ResumeHeader({ meta }: ResumeHeaderProps) {
  return (
    <header className="mb-11 grid grid-cols-1 items-end gap-6 border-b border-resume-line pb-10 sm:grid-cols-[1fr_auto]">
      <div>
        <p className="mb-3 font-mono text-[11px] tracking-[0.15em] text-resume-ink uppercase">
          {meta.roleTag}
        </p>
        <h1 className="font-display text-[36px] leading-[1.05] tracking-[-0.01em] text-resume-ink sm:text-[52px]">
          {meta.firstName}{" "}
          <em className="text-resume-muted italic">{meta.lastName}</em>
        </h1>
        <p className="mt-3.5 max-w-[440px] text-sm leading-[1.7] font-light text-resume-muted">
          {meta.tagline}
        </p>
      </div>
      <div className="font-mono text-[11px] leading-[2.1] text-resume-muted sm:text-right">
        <div>{meta.location}</div>
        {meta.contact.map((link) => (
          <div key={link.label}>
            <a
              href={link.href}
              className="text-resume-ink underline-offset-2 hover:underline"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </header>
  )
}
