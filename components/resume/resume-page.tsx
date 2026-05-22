import { CommunityPills } from "@/components/resume/community-pills"
import { ExperienceList } from "@/components/resume/experience-list"
import { ProfileSection } from "@/components/resume/profile-section"
import { ResumeFooter } from "@/components/resume/resume-footer"
import { ResumeHeader } from "@/components/resume/resume-header"
import { SkillsGrid } from "@/components/resume/skills-grid"
import { resumeData } from "@/lib/resume-data"

export function ResumePage() {
  const { meta, profile, skills, experience, community, footer } = resumeData

  return (
    <>
      <div
        className="resume-grain pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />
      <main
        id="resume-content"
        className="resume-page relative z-1 mx-auto max-w-[820px] px-5 py-8 pb-20 sm:px-12 sm:pt-[60px] sm:pb-20"
      >
        <section className="mb-11">
          <ResumeHeader meta={meta} />
        </section>

        <section className="mb-11">
          <ProfileSection profile={profile} />
        </section>

        <section className="mb-11">
          <SkillsGrid skills={skills} />
        </section>

        <section className="mb-11">
          <ExperienceList experience={experience} />
        </section>

        <section className="mb-11">
          <CommunityPills community={community} />
        </section>

        <ResumeFooter footer={footer} />
      </main>
    </>
  )
}
