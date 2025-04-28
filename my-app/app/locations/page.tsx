"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsList, TabsTrigger, Tabs, TabsContent} from "@/components/ui/tabs"  // 
import dynamic from "next/dynamic";

const GermanyMap = dynamic(() => import("@/components/GermanyMap"), { ssr: false });

const locations = [
  {
    id: "munich",
    name: "Munich",
    description: "Our founding location and the heart of our operations.",
    longDescription:
      "Munich serves as our main hub where we host most of our events and workshops. The vibrant financial ecosystem of Munich provides the perfect backdrop for our activities.",
    address: "Arcisstraße 21, 80333 Munich, Germany",
    phone: "+49 89 1234567",
    email: "munich@munichfinancecircle.de",
    coordinates: { lat: 48.1351, lng: 11.582 },
    image: "/images/Locations/MunichLocation.jpg",
    mapsLink:"https://www.google.de/maps/place/TUM+N1+Nordbau,+Arcisstra%C3%9Fe+21,+80333+M%C3%BCnchen/@48.1504511,11.5658178,17z/data=!3m1!4b1!4m6!3m5!1s0x479e75ef4ec29f69:0x5ab00d45ca8a2f7e!8m2!3d48.1504475!4d11.5683927!16s%2Fg%2F1ptvrxbll?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "heilbronn",
    name: "Heilbronn",
    description: "Our new innovative location that extends our network.",
    longDescription:
      "The Heilbronn location focuses on fintech and emerging financial technologies, providing our members with insights into the future of finance.",
    address: "Bildungscampus 9, 74076 Heilbronn, Germany",
    phone: "+49 7131 1234567",
    email: "heilbronn@munichfinancecircle.de",
    coordinates: { lat: 49.1429, lng: 9.2104 },
    image: "/images/Locations/HeilbronnLocation.jpg",
    mapsLink: "https://www.google.de/maps/place/TUM+Campus+Heilbronn+%7C+School+of+Management/@49.1484442,9.2103132,17z/data=!3m1!4b1!4m6!3m5!1s0x47982fa2cc57ffef:0x8aed1075ab8a2d65!8m2!3d49.1484408!4d9.2151841!16s%2Fg%2F11gfndnyxh?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
  },
]

export default function LocationsPage() {
  const [] = useState("munich")

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Our Locations</h1>
          <p className="text-lg text-muted-foreground">Meet us at one of our locations in Germany</p>
        </div>

        <Tabs defaultValue="munich">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="munich">Munich</TabsTrigger>
            <TabsTrigger value="heilbronn">Heilbronn</TabsTrigger>
          </TabsList>

          {locations.map((location) => (
            <TabsContent key={location.id} value={location.id} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{location.name}</CardTitle>
                    <CardDescription>{location.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <p>{location.longDescription}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{location.address}</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>{location.phone}</span>
                      </div> */}
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>{location.email}</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <a href={location.mapsLink} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full">
                          Get Directions
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Image container to match card height */}
                <div className="relative rounded-xl overflow-hidden bg-muted h-full">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.name} office`}
                    fill
                    className="object-cover"
                  />
                


                  {/* <Card>
                    <CardHeader>
                      <CardTitle>Location Map</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="map-container bg-muted flex items-center justify-center">
                        
                      </div>
                    </CardContent>
                  </Card> */}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Germany Map</CardTitle>
              <CardDescription>Our locations across Germany</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Remove fixed aspect ratio and unnecessary padding */}
              <div className="relative rounded-xl overflow-hidden bg-muted">
                <GermanyMap />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

