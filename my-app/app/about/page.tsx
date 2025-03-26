import { Building2, Rocket, CircuitBoard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const topics = [
  {
    title: "Corporate Finance",
    icon: Building2,
    description:
      "We dive deep into the world of Investment Banking, Asset Management, and M&A. Our members gain hands-on experience through:",
    points: [
      "Workshops with industry professionals",
      "Real-world case studies from leading banks",
      "Financial modeling and valuation training",
      "Networking events with corporate partners",
    ],
  },
  {
    title: "Entrepreneurial Finance",
    icon: Rocket,
    description: "We bridge the gap between innovative startups and financial resources. Our focus areas include:",
    points: [
      "Venture Capital insights",
      "Startup valuation methodologies",
      "Pitch deck preparation workshops",
      "Networking with successful entrepreneurs",
    ],
  },
  {
    title: "Technology in Finance",
    icon: CircuitBoard,
    description: "We explore the intersection of finance and technology, covering topics such as:",
    points: [
      "Blockchain and cryptocurrency developments",
      "Fintech innovation trends",
      "Digital banking solutions",
      "AI and machine learning in Finance",
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Munich FinanceCircle is a student organization dedicated to bridging the gap between academic finance
            education and real-world industry experience. We focus on three key areas that shape the future of finance.
          </p>
        </div>

        <div className="space-y-12">
          {topics.map((topic) => (
            <Card key={topic.title} className="overflow-hidden">
              <div className="md:grid md:grid-cols-5 md:divide-x">
                <CardHeader className="md:col-span-2 flex flex-col items-center justify-center text-center p-8 bg-secondary/30">
                  <topic.icon className="h-16 w-16 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">{topic.title}</CardTitle>
                </CardHeader>

                <CardContent className="md:col-span-3 p-8">
                  <p className="text-lg mb-6 text-muted-foreground">{topic.description}</p>
                  <ul className="space-y-4">
                    {topic.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2 mr-3" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Join Us to Go Beyond in the World of Finance</h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Whether you are passionate about traditional finance, entrepreneurship, or financial technology, Munich
                FinanceCircle offers you the platform to grow and connect with industry leaders and innovators.
              </p>
              <div className="inline-flex gap-4">
                <a
                  href="/apply"
                  className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

