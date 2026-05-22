import { SectionLabel } from "@/components/resume/section-label"

interface ProfileSectionProps {
  profile: string
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section>
      <SectionLabel>Profile</SectionLabel>
      <p className="border-l-2 border-resume-line pl-5 text-[15px] leading-[1.85] font-light text-resume-ink">
        {profile}
      </p>
    </section>
  )
}
