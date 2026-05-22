"use client"

import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import * as React from "react"

export function ExportPdfButton() {
  const [exporting, setExporting] = React.useState(false)

  async function handleExport() {
    const element = document.getElementById("resume-content")
    if (!element || exporting) return

    setExporting(true)

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        onclone: (doc) => {
          const grain = doc.querySelector(".resume-grain")
          grain?.remove()
          doc.querySelectorAll(".export-hide").forEach((el) => {
            ;(el as HTMLElement).style.display = "none"
          })
        },
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = pageWidth
      const imgHeight = (canvas.height * pageWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save("stewart-huang-glyph-resume.pdf")
    } catch {
      window.print()
    } finally {
      setExporting(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={exporting}
      className="export-hide font-mono text-[11px] text-resume-muted underline-offset-2 transition-colors hover:text-resume-ink hover:underline disabled:opacity-50"
    >
      {exporting ? "Exporting…" : "Export PDF"}
    </button>
  )
}
