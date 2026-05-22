import type { ResumeParagraph } from "@/lib/resume-data"

interface RichParagraphProps {
  paragraph: ResumeParagraph
  className?: string
}

export function RichParagraph({ paragraph, className }: RichParagraphProps) {
  return (
    <p className={className}>
      {paragraph.map((part, index) =>
        part.type === "link" ? (
          <a
            key={`${part.href}-${index}`}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-resume-ink underline-offset-2 hover:underline"
          >
            {part.label}
          </a>
        ) : (
          <span key={`${part.value.slice(0, 24)}-${index}`}>{part.value}</span>
        )
      )}
    </p>
  )
}
