import { SectionLabel } from "@/components/resume/section-label"

interface ProfileSectionProps {
  profile: string[]
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section>
      <SectionLabel>Profile</SectionLabel>
      <div className="space-y-4 border-l-2 border-resume-line pl-5">
        {profile.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-[15px] leading-[1.85] font-light text-resume-ink"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
