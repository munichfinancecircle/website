import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample partner data with extended descriptions
export const partners = [
  {
    name: "Jane Street",
    logo: "/images/PartnerLogos/JaneStreetLogo.png",
    description:
      "Jane Street is a global trading firm and liquidity provider. We partner with them to provide our members with insights into quantitative trading and market making. Through this partnership, our members get exclusive access to workshops and potential internship opportunities.",
  },
  {
    name: "TIBURON",
    logo: "/images/PartnerLogos/Tiburon.jpg",
    description:
      "TIBURON is a leading investment and advisory firm focused on growth companies. Our partnership enables members to learn about private equity and venture capital through practical case studies and mentorship programs.",
  },
  {
    name: "Bloomberg",
    logo: "/images/PartnerLogos/bloombergLogo.png",
    description:
      "Bloomberg is a global financial data and media company. Through our collaboration, members receive training on the Bloomberg Terminal and gain valuable insights into financial markets and data analysis.",
  },
  {
    name: "S&P Global",
    logo: "/images/PartnerLogos/SnPGlobal.jpg",
    description:
      "S&P Global is the world's leading provider of credit ratings and analytics. Our partnership provides members with access to market intelligence resources and workshops on credit analysis.",
  },
  {
    name: "ValueTrust",
    logo: "/images/PartnerLogos/ValueTrust.jpg",
    description:
      "ValueTrust offers financial advisory and valuation services. Through this partnership, our members gain practical experience in company valuation and financial modeling through real-world case studies.",
  },
  {
    name: "ALP.X GROUP",
    logo: "/images/PartnerLogos/ALPX.jpg",
    description:
      "ALP.X GROUP is an innovative investment and consulting group. Our collaboration focuses on providing members with insights into sustainable finance and impact investing.",
  },
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
          <h1 className="section-title mb-4">Our Partners</h1>
          <p className="text-lg text-muted-foreground">Get to know the partners of the Munich FinanceCircle</p>
        </div>
        <div className="space-y-8">
          {partners.map((partner) => (
            <Card key={partner.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl p-6">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">{partner.name}</h2>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

