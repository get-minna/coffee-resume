import { SectionLabel } from "@/components/resume/section-label"
import type { ExperienceItem } from "@/lib/resume-data"

interface ExperienceListProps {
  experience: ExperienceItem[]
}

export function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <section>
      <SectionLabel>Experience</SectionLabel>
      <div>
        {experience.map((item, index) => (
          <article
            key={`${item.title}-${item.dates}`}
            className={`exp-item mb-[30px] grid grid-cols-1 gap-1 border-b border-resume-line pb-[30px] sm:grid-cols-[140px_1fr] sm:gap-6 ${
              index === experience.length - 1
                ? "mb-0 border-b-0 pb-0"
                : ""
            }`}
          >
            <div>
              <p className="font-mono text-[11px] text-resume-muted">
                {item.dates}
              </p>
              <p className="font-mono text-[10px] tracking-[0.1em] text-resume-muted uppercase">
                {item.type}
              </p>
            </div>
            <div>
              <h3 className="font-display text-[17px] font-normal text-resume-ink">
                {item.title}
              </h3>
              <p className="mb-2.5 font-mono text-[11px] text-resume-muted">
                {item.company}
              </p>
              <p className="text-[13px] leading-[1.75] font-light text-resume-muted">
                {item.description}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-resume-line px-2 py-0.5 font-mono text-[10px] text-resume-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
