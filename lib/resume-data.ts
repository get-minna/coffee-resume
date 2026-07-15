export interface ContactLink {
  label: string
  href: string
}

export type ResumeTextPart =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string }

export type ResumeParagraph = ResumeTextPart[]

export function paragraphToPlainText(paragraph: ResumeParagraph): string {
  return paragraph
    .map((part) => (part.type === "text" ? part.value : part.label))
    .join("")
}

export interface SkillCard {
  title: string
  body: string
}

export interface ExperienceItem {
  dates: string
  type: string
  title: string
  company: string
  description: string[]
  tags: string[]
}

export interface CommunityPill {
  strong: string
  rest: string
}

export interface ResumeData {
  meta: {
    roleTag: string
    firstName: string
    lastName: string
    tagline: ResumeParagraph[]
    location: string
    contact: ContactLink[]
  }
  profile: string[]
  skills: SkillCard[]
  experience: ExperienceItem[]
  community: CommunityPill[]
  footer: {
    applicationLine: string
    attribution: string
  }
}

export const resumeData: ResumeData = {
  meta: {
    roleTag: "Front of House · Minna Supply",
    firstName: "Stewart",
    lastName: "Huang",
    tagline: [
      [
        {
          type: "text",
          value:
            "Award-winning Product Engineer who shipped at national scale, previously ",
        },
        {
          type: "link",
          label: "@Govtech",
          href: "https://www.tech.gov.sg/",
        },
        { type: "text", value: "." },
      ],
      [
        {
          type: "text",
          value:
            "Now applying that same obsessive attention to specialty coffee — from brewing on a semi-automatic like Decent DE1/Meticulous Home, manual brewing with Orea and UFO brewer, to sample roasting on an Ikawa Pro.",
        },
      ],
    ],
    location: "Singapore",
    contact: [
      { label: "stewart@designbetter.io", href: "mailto:stewart@designbetter.io" },
      { label: "+65 81336551", href: "tel:+65 81336551" },
      { label: "work instagram", href: "https://www.instagram.com/obsidianaregood" },
      { label: "linkedin", href: "https://www.linkedin.com/in/stewartsg" },
    ],
  },
  profile: [
    "I spent 12 years designing, building and shipping award-winning digital products — including SafeEntry, Singapore's national check-in system that handled 3–4 million daily check-ins and helped local businesses and coffee shops reopen safely during the pandemic. That work taught me how to move fast, stay precise under pressure, and care deeply about the people on the other side of a product.",
    "During Covid, I discovered coffee — seriously. What started with a Breville Infuser became an accidental obsession with a semi-automatic like Decent DE1, where I learnt flow profiling, and now I venture into manual brewing with an Orea V4 and UFO brewer. I also have an Ikawa Pro, sourcing my own greens at regional coffee shows like Taiwan Coffee Show, working directly with producers, and collecting manual brew devices out of genuine curiosity about how and why each one extracts differently.",
  ],
  skills: [
    {
      title: "Espresso",
      body: "Breville Infuser → Decent DE1 XL → Meticulous Home → Olympia Cremina Lever machine. Practice dialling in dose, pressure profiling, flow profiling, and blind tasting. Understands the variables, not just the recipe.",
    },
    {
      title: "Manual Brew",
      body: "Aeropress, Orea V4 with Negotiator, Hario Switch, UFO Brewer. Always curious about what makes each device different — and how to push it further.",
    },
    {
      title: "Home Roasting",
      body: "Roasting on Ikawa. Sources green beans from producers online or at tradeshows, experiments with profiles, tracks development time. Understands roast as a language, not just a process.",
    },
    {
      title: "Trade Fluency",
      body: "Comfortable holding informed conversations on origin, processing, roast and brew with roasters, cafe owners, and serious coffee enthusiasts — built through years of active obsession and practice at trade shows.",
    },
    {
      title: "Industry Context",
      body: "Follows Singapore and global specialty coffee closely — including Taiwan and Korean roastery culture, equipment design trends, and how great cafes build their identity.",
    },
    {
      title: "Cafe Operations",
      body: "Built software for Cafes as my own startup. Understands the customer journey, loyalty, retention, and the real pressures of running an independent specialty cafe as a founder.",
    },
  ],
  experience: [
    {
      dates: "2026 – Present",
      type: " ",
      title: "Head of Bar & Founder",
      company: "Kizuna by Minna · Regional",
      description: [
        "Building next-generation mobile specialty coffee cart focused on beans from local roasteries — signing partnerships with 3 local roasteries within 1 month of operation and deployed to 2 locations in Singapore, with plans to expand in Singapore and regionally.",
        "Embedded in how the global specialty community communicates, builds audience, and earns credibility through growing the largest specialty coffee community in Singapore and being an appointed media partner for Specialty Coffee Association covering Singapore National Coffee Championship 2026.",
      ],
      tags: ["Specialty coffee world", "Trade relationships", "Global scene"],
    },
    {
      dates: "2026 – Present",
      type: " ",
      title: "Product Engineer & Founder",
      company: "Minna OS · Regional",
      description: [
        "Building next-generation omni-channel operating system for independent cafes and F&B businesses to help them thrive. First in Asia to launch a digital loyalty card that lives on the customer's phone via Apple/Google Wallets — no app download required.",
        "Secured pre-orders and a signed pilot with a Singapore cafe within the first month, and onboarding more cafes in Singapore and South Korea.",
        "Deep firsthand understanding of what cafe operators need, how customers behave, and what keeps people coming back.",
      ],
      tags: ["Pilot signed", "Pre-orders secured", "Built for cafes, Asia First"],
    },
    {
      dates: "2020 – 2025",
      type: "",
      title: "Product Engineer · National Digital Infrastructure @ GovTech",
      company: "SafeEntry & SingaporeRewards (Singapore Tourism Board) · Singapore Government",
      description: [
        "Led product design and engineering on SafeEntry — Singapore's national check-in system, processing 3–4 million daily check-ins and helping businesses including cafes reopen safely during the pandemic.",
        "Also designed and built e-commerce and loyalty experiences for SingaporeRewards in collaboration with the Singapore Tourism Board as part of the post-pandemic travel recovery programme.",
      ],
      tags: [
        "3–4M daily check-ins",
        "National scale",
        "e-commerce (Singapore Tourism Board)",
        "Award-winning",
      ],
    },
    {
      dates: "2016 – 2019",
      type: " ",
      title: "Product & Engineering · Regional Roles @Bain&Co, @AccentureDigital",
      company: "Singapore · Jakarta · Bangkok · Kuala Lumpur · Amsterdam",
      description: [
        "Nine years across e-commerce, lifestyle banking, and consumer product builds spanning Southeast Asia and Europe. Worked extensively on-the-ground in Jakarta, Bangkok, and Kuala Lumpur, with regular project involvement in Amsterdam.",
        "Built a foundation in shipping products across diverse cultures, fast-paced environments, and high expectations.",
      ],
      tags: ["SE Asia", "Amsterdam", "E-commerce", "Consumer products"],
    },
  ],
  community: [
    { strong: "Grind & Shine Podcast", rest: "+ tech lead, videographer, agile content creator for SNCC 2026 – broadcasting this year's finals to the world" },
    { strong: "SG Coffee Neighborhood", rest: "+ community cupping volunteer – making specialty coffee accessible to all" },
    { strong: "Coffee Curator", rest: "+ curating the best of coffee from roasteries in Busan, Korea – sourcing & coffee distribution to local cafes in SG" },
  ],
  footer: {
    applicationLine: "Front of House Team · Minna Supply · Singapore",
    attribution: "Stewart Huang · 2026",
  },
}
