import Image from "next/image"

interface Contribution {
  organization: string
  logo: string
  pullRequests: {
    id: string
    url: string
    title: string
    date: string
    type: string
  }[]
}

const contributions: Contribution[] = [
  {
    organization: "Dodo Payments",
    logo: "https://github.com/dodopayments.png",
    pullRequests: [
      {
        id: "221",
        url: "https://github.com/dodopayments/billingsdk/pull/221",
        title: "Added Stripe integration for Next.js",
        date: "sep 2025",
        type: "feature",
      },
      {
        id: "191",
        url: "https://github.com/dodopayments/billingsdk/pull/191",
        title: "Added Stripe integration for Express framework",
        date: "sep 2025",
        type: "feature",
      },
      {
        id: "137",
        url: "https://github.com/dodopayments/billingsdk/pull/137",
        title: "Added React.js template with useBilling hook",
        date: "jul 2025",
        type: "feature",
      },
      {
        id: "124",
        url: "https://github.com/dodopayments/billingsdk/pull/124",
        title: "Added BillingSetting component with demo",
        date: "jun 2025",
        type: "feature",
      },
    ],
  },
  {
    organization: "Cal.com",
    logo: "https://github.com/calcom.png",
    pullRequests: [
      {
        id: "21097",
        url: "https://github.com/calcom/cal.com/pull/21097",
        title: "Fix: add missing 'add' in profile username tip",
        date: "may 2025",
        type: "bug fix",
      },
    ],
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="mb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">open source contributions</h2>

      <div className="space-y-8">
        {contributions.map((contribution) => (
          <div key={contribution.organization} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={contribution.logo}
                alt={`${contribution.organization} logo`}
                width={32}
                height={32}
                className="rounded-full"
              />
              <h3 className="text-lg font-semibold">{contribution.organization}</h3>
            </div>
            <ul className="space-y-3 ml-11">
              {contribution.pullRequests.map((pr) => (
                <li key={pr.id} className="text-sm">
                  <span className="text-muted-foreground">{pr.date} ({pr.type}):</span>{" "}
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-muted-foreground transition"
                  >
                    {pr.title}
                  </a>{" "}
                  <span className="text-xs text-muted-foreground">[#{pr.id}]</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

