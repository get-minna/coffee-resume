import { SectionLabel } from "@/components/resume/section-label"
import type { SkillCard } from "@/lib/resume-data"

interface SkillsGridProps {
  skills: SkillCard[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section>
      <SectionLabel>Coffee Knowledge & Practice</SectionLabel>
      <div className="skills-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="skill-card rounded-lg border border-resume-line bg-resume-surface p-4 transition-colors duration-200 hover:border-resume-ink sm:p-[16px_18px]"
          >
            <h3 className="mb-2 font-mono text-[10px] tracking-[0.12em] text-resume-ink uppercase">
              {skill.title}
            </h3>
            <p className="text-[13px] leading-[1.65] font-light text-resume-muted">
              {skill.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
