import { SectionLabel } from "@/components/resume/section-label"
import type { CommunityPill } from "@/lib/resume-data"

interface CommunityPillsProps {
  community: CommunityPill[]
}

export function CommunityPills({ community }: CommunityPillsProps) {
  return (
    <section>
      <SectionLabel>In the Coffee World</SectionLabel>
      <div className="flex flex-wrap gap-2.5">
        {community.map((pill) => (
          <span
            key={pill.strong}
            className="rounded-full border border-resume-line bg-resume-surface px-4 py-2 font-mono text-[11px] text-resume-muted"
          >
            <strong className="font-medium text-resume-ink">{pill.strong}</strong>
            {pill.rest ? ` ${pill.rest}` : null}
          </span>
        ))}
      </div>
    </section>
  )
}
