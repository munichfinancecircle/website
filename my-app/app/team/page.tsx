"use client"

//import { useState } from "react"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs" //

// Sample team data
const teamData = {
  munich: [
    {
      id: 1,
      name: "Constantin Albrecht",
      role: "President & Founder",
      image: "/images/Team/TeamConstantinAlbrecht.jpg",
      bio: "Constantin oversees the club which he founded in 2023 with the vision to connect ambitious students with industry professionals. He gained previous experience at Deutsche Bank, Citadel and in bond trading.",
      linkedin: "https://www.linkedin.com/in/constantin-albrecht/",
      email: "constantin.albrecht@munichfinancecircle.de",
    },
    {
      id: 2,
      name: "Antonia Zimmermann",
      role: "Head of Education",
      image: "/images/Team/TeamAntoniaZimmermann.jpg",
      bio: "Antonia oversees all educational initiatives and workshops. Leveraging her background in accounting and audit, she is deeply committed to ensuring that financial knowledge is accessible and understandable for students.",
      linkedin: "https://www.linkedin.com/in/antonia-zimmermann-1863b2215/",
      email: "antonia.zimmermann@munichfinancecircle.de",
    },
    {
      id: 3,
      name: "Maximilian Warthmann",
      role: "Head of Infrastructure",
      image: "/images/Team/TeamMaximilianWarthmann.jpg",
      bio: "Maximilian is responsible for the operational infrastructure of the organization. He has experience in project management and business development and has previously been working for BMW in Software Development.",
      linkedin: "https://www.linkedin.com/in/maximilianwarthmann/",
      email: "maximilian.warthmann@munichfinancecircle.de",
    },
    {
      id: 4,
      name: "Louise Lorenz",
      role: "Head of Communications",
      image: "/images/Team/TeamLouiseLorenz.jpg",
      bio: "Louise is responsible for the internal and external communication of our organization. Her role includes managing our social-media, coordinating marketing efforts and serving as a point of contact for prospective members.",
      linkedin: "https://www.linkedin.com/in/louise-lorenz-93ba452b1/",
      email: "louise.lorenz@munichfinancecircle.de",
    },
  ],
  heilbronn: [
    {
      id: 5,
      name: "Steven Keogh",
      role: "Heilbronn Branch Director",
      image: "/images/Team/TeamHeilbronn_StevenKeogh.jpg",
      bio: "Steven leads our Heilbronn branch, focusing on fintech innovations and emerging technologies in finance. He has experience in startup incubation and venture capital.",
      linkedin: "#",
      email: "thomas@munichfinancecircle.de",
    },
    {
      id: 6,
      name: "Daniel Simonides",
      role: "Head of Member Development",
      image: "/images/Team/TeamHeilbronn_DanielSimonides.jpg",
      bio: "Daniel is responsible for all educational events and workshops in Heilbronn. His fields of expertise include quantitative analysis and market research. Formerly, he has gained experience by working with Porsche Digital as a part of an educational program by Campus Founders.",
      linkedin: "https://www.linkedin.com/in/daniel-simonides-03b725289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "daniel.simonides@munichfinancecircle.de",
    },
    {
      id: 7,
      name: "David Gang",
      role: "Technology Officer",
      image: "/images/Team/TeamHeilbronn_DavidGang.jpg",
      bio: "Michael oversees all technology initiatives at our Heilbronn hub. He has experience in software development and blockchain technology.",
      linkedin: "#",
      email: "david.gang@munichfinancecircle.de",
    },
    {
      id: 8,
      name: "Lukas",
      role: "Technology Officer",
      image: "/images/Team/TeamHeilbronn_LukasW.jpg",
      bio: "Lukas is responsible for external affairs at the club, where he helps connect students with industry leaders. He has gained experience with RedBull in Marketing and Schoellerbank in Wealth Management.",
      linkedin: "#",
      email: "lukas.w@munichfinancecircle.de",
    },
  ],
}

export default function TeamPage() {
  //const [activeLocation, setActiveLocation] = useState("munich")

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground">Meet the dedicated individuals behind Munich FinanceCircle</p>
        </div>

        <Tabs defaultValue="munich"> 
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="munich">Munich Team</TabsTrigger>
            <TabsTrigger value="heilbronn">Heilbronn Team</TabsTrigger>
          </TabsList>

          <TabsContent value="munich" className="space-y-8">
            {teamData.munich.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-64 md:h-auto relative"> 
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover object-[center_30%]" priority/>
                    </div>
                    <div className="w-full md:w-2/3 p-6">
                      <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-6">{member.bio}</p>
                      <div className="flex gap-4">
                        <a
                          title="LinkedIn"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a title="EMail" href={`mailto:${member.email}`} className="text-primary hover:text-primary/80">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="heilbronn" className="space-y-8">
            {teamData.heilbronn.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover object-[center_30%]" priority/>
                    </div>
                    <div className="w-full md:w-2/3 p-6">
                      <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-6">{member.bio}</p>
                      <div className="flex gap-4">
                        <a
                          title="LinkedIn"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a title="EMail" href={`mailto:${member.email}`} className="text-primary hover:text-primary/80">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

