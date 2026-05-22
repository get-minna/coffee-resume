import { ExportPdfButton } from "@/components/resume/export-pdf-button"
import type { ResumeData } from "@/lib/resume-data"

interface ResumeFooterProps {
  footer: ResumeData["footer"]
}

export function ResumeFooter({ footer }: ResumeFooterProps) {
  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-resume-line pt-6 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-mono text-[11px] text-resume-muted">
        {footer.applicationLine}
      </span>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <ExportPdfButton />
        <span className="font-mono text-[11px] text-resume-muted">
          {footer.attribution}
        </span>
      </div>
    </footer>
  )
}
