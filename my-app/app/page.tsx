import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Rocket, CircuitBoard, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
//import { partners } from "./partners/page"


// Sample partner data
const partners = [
  {
    name: "Jane Street",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading global trading firm and liquidity provider.",
  },
  {
    name: "TIBURON",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Investment and advisory firm focused on growth companies.",
  },
  {
    name: "Bloomberg",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Global financial data and media company.",
  },
  {
    name: "S&P Global",
    logo: "/placeholder.svg?height=100&width=200",
    description: "World's leading provider of credit ratings and analytics.",
  },
  {
    name: "ValueTrust",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Financial advisory and valuation services.",
  },
  {
    name: "ALP.X GROUP",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Investment and consulting group.",
  },
]

// Sample team data
const team = [
  {
    name: "Constantin Albrecht",
    role: "President & Founder",
    image: "/images/Team/TeamConstantinAlbrecht.jpg",
    linkedin: "#",
  },
  {
    name: "Antonia Zimmermann",
    role: "Advisory Vice President Education",
    image: "/images/Team/TeamAntoniaZimmermann.jpg",
    linkedin: "#",
  },
  {
    name: "Maximilian Warthmann",
    role: "Advisory Vice President Infrastructure",
    image: "/images/Team/TeamMaximilianWarthmann.jpg",
    linkedin: "#",
  },
  {
    name: "Louise Lorenz",
    role: "Head of Communications",
    image: "/images/Team/TeamMaximilianWarthmann.jpg",
    linkedin: "#",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Banner image in a div */}
      <section className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/images/HomeBanner.jpg"
              alt="Munich FinanceCircle Banner"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Corporate Finance</h3>
              <p className="text-muted-foreground">
                We explore topics like Investment Banking, Asset Management, M&A, and more.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrepreneurial Finance</h3>
              <p className="text-muted-foreground">
                We connect our members with industry experts and potential investors.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CircuitBoard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technology in Finance</h3>
              <p className="text-muted-foreground">
                From Blockchain to Fintech innovations, we explore the latest technological advancements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="relative w-64 h-64 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-primary" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/team">
                View all team members <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {partners.slice(0, 6).map((partner) => (
              <div
                key={partner.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/partners">
                View all partners <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

