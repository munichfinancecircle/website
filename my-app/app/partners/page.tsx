import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Sample partner data with extended descriptions

export default function PartnersPage() {
  const partners = [
    {
      name: "Jane Street",
      logo: "/images/PartnerLogos/JaneStreetLogo.png",
      description:
        "Jane Street is a global trading firm and liquidity provider. We partner with them to provide our members with insights into quantitative trading and market making. Through this partnership, our members get exclusive access to workshops and potential internship opportunities.",
    },
    {
      name: "Rothschild & Co",
      logo: "/images/PartnerLogos/Rothschild.jpg",
      description:
        "Rotschild is a prominent boutique investment bank specializing in advisory services for mergers, acquisitions, and strategic financial transactions. Our partnership allows members to engage directly with industry professionals and gain exposure to high-level financial advisory work.",
    },
    {
      name: "J.P. Morgan",
      logo: "/images/PartnerLogos/JPMorganChase.jpg",
      description:
        "J.P. Morgan, a global leader in financial services, brings our members closer to the world of investment banking, asset management, and innovative financial solutions. Through tailored workshops and real-case simulations, students gain practical exposure to global markets and strategic finance.",
    },
    {
      name: "Morgan Stanley",
      logo: "/images/PartnerLogos/MorganStanley.jpg",
      description:
        "Morgan Stanley, renowned for its expertise in investment banking and wealth management, offers our members insight into high-impact deal-making and financial strategy. Engaging sessions and case challenges provide a unique view into capital markets, advisory services, and global finance leadership.",
    },
    {
      name: "KKR",
      logo: "/images/PartnerLogos/KKRLogo.png",
      description:
        "KKR is a global investment firm that manages multiple alternative asset classes. Through our collaboration, members explore private equity, infrastructure, and credit investing, with direct exposure to KKR’s approach to value creation and networking opportunities across the industry.",
    },
    {
      name: "Evercore",
      logo: "/images/PartnerLogos/EvercoreLogo.jpg",
      description:
        "Evercore is a leading global independent investment banking advisory firm. Our partnership offers members deep insights into mergers and acquisitions, restructuring, and financial advisory. Students gain access to exclusive workshops and recruiting opportunities with Evercore professionals.",
    },
    {
      name: "Lazard",
      logo: "/images/PartnerLogos/LazardLogo.png",
      description:
        "Lazard is a leading global financial advisory firm specializing in mergers and acquisitions, restructuring, and strategic advisory. Through our partnership, members gain deep insights into Lazard’s advisory work, as well as access to exclusive workshops and recruiting opportunities with Lazard professionals.",
    },
    {
      name: "BNP Paribas",
      logo: "/images/PartnerLogos/BNPParibasLogo.jpg",
      description:
        "BNP Paribas is an international banking group with a strong presence in global markets and corporate finance. Our partnership allows members to engage with professionals in investment banking, risk management, and sustainable finance, gaining insights and internship pathways within BNP Paribas.",
    },
    {
      name: "Barclays",
      logo: "/images/PartnerLogos/BarclaysLogo.jpg",
      description:
        "Barclays is a leading global bank offering services across investment banking, wealth management, and corporate finance. Through this partnership, members can connect with professionals in finance, technology, and innovation, exploring opportunities for mentorship, internships, and career growth within Barclays.",
    },
    {
      name: "Armira",
      logo: "/images/PartnerLogos/Armira.jpg",
      description:
        "Armira is a Munich-based private equity firm focused on long-term investments in high-quality companies. Our partnership provides members with insights into private equity investment strategies and operational excellence through workshops and case studies.",
    },
    {
      name: "KPMG",
      logo: "/images/PartnerLogos/KPMG.jpg",
      description:
        "KPMG is one of the Big Four accounting firms, offering audit, tax, and advisory services worldwide. We are partnering with their Deal Advisory. Thorugh the partnership our members can benefit from workshops and insights into M&A Advisory and Tech Due Diligence.",
    },
    {
      name: "Bloomberg",
      logo: "/images/PartnerLogos/bloombergLogo.png",
      description:
        "Bloomberg is the leading global financial data provider. Through our collaboration, members receive training on the Bloomberg Terminal and gain valuable insights into financial markets and data analysis.",
    },    
    {
      name: "TIBURON",
      logo: "/images/PartnerLogos/Tiburon.jpg",
      description:
        "TIBURON is a venture capital and advisory firm focused on growth companies. Our partnership enables members to learn more about this exciting industry through practical case studies.",
    },
    {
      name: "ALAIKA",
      logo: "/images/PartnerLogos/ALAIKA.jpg",
      description:
        "ALAIKA is a dynamic consulting and private equity firm focused on digital transformation and growth strategies. By partnering with ALAIKA, our members gain practical exposure to strategy consulting and operational improvement projects.",
    },
    {
      name: "S&P Global",
      logo: "/images/PartnerLogos/SnPGlobal.jpg",
      description:
        "S&P Global is the world's leading provider of credit ratings and analytics. Our partnership provides members with access to market intelligence resources and workshops on credit and risk analysis.",
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
      description: "ALP.X GROUP is an innovative investment group. Our collaboration focuses on providing members with insights into sustainable finance and impact investing.",
    },
    {
      name: "Börse München",
      logo: "/images/PartnerLogos/BoerseMunich.jpg",
      description: "Börse München is a renowned stock exchange based in Munich, specializing in transparent and investor-friendly trading. Through our partnership, members gain insights into exchange operations, market structure, and regulatory frameworks via exclusive workshops and events."
    },
    {
      name: "Bethmann Bank",
      logo: "/images/PartnerLogos/Bethmann.jpg",
      description: "Bethmann Bank is one of Germany's leading private banks, with a strong focus on wealth management. Our collaboration provides members with opportunities to explore private banking, asset management strategies, and sustainable investment approaches."
    },
    {
      name: "Donner & Reuschel",
      logo: "/images/PartnerLogos/DonnerReuschel.jpg",
      description: "Donner & Reuschel is a prestigious private bank with a long-standing tradition in wealth management and investment advisory. This partnership offers members exclusive insights into private banking, financial planning, and corporate finance through expert-led sessions."
    },
    {
      name: "financial.com",
      logo: "/images/PartnerLogos/financialcom.jpg",
      description: "financial.com is a leading provider of market data and trading solutions for banks and financial institutions. Through this collaboration, members gain hands-on experience with financial technology, data analytics, and real-time market insights."
    },
    {
      name: "TUM School of Management",
      logo: "/images/PartnerLogos/TUM.jpg",
      description: "TUM School of Management is a top-tier business school known for its excellence in finance, entrepreneurship, and innovation. Our partnership enables members to engage in academic research, attend industry-focused seminars, and participate in career development programs."
    },
  ]
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
                  <div className="w-full md:w-1/3 flex items-center justify-center bg-white dark:bg-white rounded-xl p-6">
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

