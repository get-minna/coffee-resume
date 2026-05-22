export interface ContactLink {
  label: string
  href: string
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
  description: string
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
    tagline: string
    location: string
    contact: ContactLink[]
  }
  profile: string
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
    roleTag: "Application · Front of House · Glyph Supply Co",
    firstName: "Stewart",
    lastName: "Huang",
    tagline:
      "Product builder who shipped at national scale — now applying that same obsessive attention to craft coffee, from lever machine to Ikawa roaster.",
    location: "Singapore",
    contact: [
      { label: "stewart@email.com", href: "mailto:stewart@email.com" },
      { label: "+65 XXXX XXXX", href: "tel:+65" },
      { label: "linkedin / portfolio", href: "#" },
    ],
  },
  profile:
    "I spent 13 years building and shipping digital products — including SafeEntry, Singapore's national check-in system that handled 3–4 million daily check-ins and helped businesses like cafes reopen safely during the pandemic. That work taught me how to move fast, stay precise under pressure, and care deeply about the people on the other side of a product. During Covid, I discovered coffee — seriously. What started with a Breville became a lever machine, an Ikawa roaster, sourcing my own greens, and collecting manual brew devices out of genuine curiosity about how and why each one extracts differently. I apply to Glyph because I want to pursue this craft properly, and because the standard here is one worth reaching for.",
  skills: [
    {
      title: "Espresso",
      body: "Breville → dedicated espresso machine → La Pavoni lever. Daily practice dialling in dose, yield, pressure, and taste. Understands the variables, not just the recipe.",
    },
    {
      title: "Manual Brew",
      body: "Aeropress, Orea V4 with Negotiator, Hario Switch, UFO Brewer. Always curious about what makes each device different — and how to push it further.",
    },
    {
      title: "Home Roasting",
      body: "Roasting on Ikawa. Sources green beans, experiments with profiles, tracks development time. Understands roast as a language, not just a process.",
    },
    {
      title: "Trade Fluency",
      body: "Comfortable holding informed conversations on origin, processing, roast and brew with roasters, cafe owners, and serious enthusiasts — built through years of active practice.",
    },
    {
      title: "Industry Context",
      body: "Follows Singapore and global specialty coffee closely — including Korean roastery culture, equipment design trends, and how great cafes build their identity.",
    },
    {
      title: "Cafe Operations",
      body: "Built software for cafe operators. Understands the customer journey, loyalty, retention, and the real pressures of running an independent specialty cafe.",
    },
  ],
  experience: [
    {
      dates: "2024 – Present",
      type: "Founder",
      title: "Co-Founder & Product Lead",
      company: "Cafe Loyalty Software Startup · Singapore",
      description:
        "Building mobile-native loyalty and CRM software for independent cafes and F&B businesses. First product is a digital loyalty card that lives on the customer's phone — no app download required. Secured pre-orders and a signed pilot with a Singapore cafe within the first 6 months. Deep firsthand understanding of what cafe operators need, how customers behave, and what keeps people coming back.",
      tags: ["Pilot signed", "Pre-orders secured", "Built for cafes"],
    },
    {
      dates: "2023 – Present",
      type: "Consulting",
      title: "Instagram Strategy & Marketing",
      company: "Jay · UFO Brewer — Leading Korean Roastery Cafe",
      description:
        "Content strategy and growth work for two prominent names in specialty coffee — Jay, creator of the UFO Brewer, and a notable Korean roastery cafe. Embedded in how the global specialty community communicates, builds audience, and earns credibility.",
      tags: ["Specialty coffee world", "Trade relationships", "Global scene"],
    },
    {
      dates: "2020 – 2024",
      type: "Product · Gov Tech",
      title: "Product Engineer · National Digital Infrastructure",
      company: "SafeEntry & SingaporeRewards · Singapore Government",
      description:
        "Led product design and engineering on SafeEntry — Singapore's national check-in system, processing 3–4 million daily check-ins and helping businesses including cafes reopen safely during the pandemic. Also designed and built e-commerce and loyalty experiences for SingaporeRewards with the Singapore Tourism Board as part of the post-pandemic travel recovery programme.",
      tags: [
        "3–4M daily check-ins",
        "National scale",
        "Loyalty & e-commerce",
        "Award-winning",
      ],
    },
    {
      dates: "2011 – 2020",
      type: "Regional · Product",
      title: "Product & Engineering · Regional Roles",
      company: "Singapore · Jakarta · Bangkok · Kuala Lumpur · Amsterdam",
      description:
        "Nine years across e-commerce, lifestyle banking, and consumer product builds spanning Southeast Asia and Europe. Worked extensively on-the-ground in Jakarta, Bangkok, and Kuala Lumpur, with regular project involvement in Amsterdam. Built a foundation in shipping products across diverse cultures, fast-paced environments, and high expectations.",
      tags: ["SE Asia", "Amsterdam", "E-commerce", "Consumer products"],
    },
  ],
  community: [
    { strong: "Jay", rest: "· UFO Brewer creator" },
    { strong: "Korean roastery", rest: "· Marketing partner" },
    { strong: "Ikawa", rest: "· Home roaster" },
    { strong: "La Pavoni", rest: "· Lever espresso" },
    { strong: "Orea V4", rest: "+ Negotiator" },
    { strong: "Hario Switch", rest: "" },
    { strong: "UFO Brewer", rest: "" },
    { strong: "SG specialty scene", rest: "" },
  ],
  footer: {
    applicationLine: "Front of House Application · Glyph Supply Co · Singapore",
    attribution: "Stewart Huang · 2025",
  },
}
