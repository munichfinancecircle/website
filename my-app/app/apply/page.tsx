"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import ApplicationCard from "@/components/ApplicationCard"
import { DayPicker } from "react-day-picker"

// // Sample application data
// const applicationData = {
//   isActive: true,
//   googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpf4gUKL-qg22tTpWSP6nmbGgAK2PpOKHYzho6S9N8EQ7b4g/viewform?usp=dialog",
//   nextDeadline: new Date("2025-05-09T23:59:59"),
//   nextApplicationPhase: new Date("2025-04-18T00:00:00"),
//   applicationTime: 21
// }

const applicationDataMunich = {
  city: "Munich",
  isActive: true,
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpf4gUKL-qg22tTpWSP6nmbGgAK2PpOKHYzho6S9N8EQ7b4g/viewform?usp=dialog",
  nextDeadline: new Date("2025-05-09T23:59:59"),
  nextApplicationPhase: new Date("2025-04-18T00:00:00"),
  applicationTime: 21 // in days
}

const applicationDataHeilbronn = {
  city: "Heilbronn",
  isActive: true,
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdg5y5AIUKZRnciGY44bGeajOyLz7eh0fD9S67lRR6zsSkZjg/viewform?usp=dialog",
  nextDeadline: new Date("2025-05-20T23:59:59"),
  nextApplicationPhase: new Date("2025-05-01T00:00:00"),
  applicationTime: 19 // in days
}


export default function ApplyPage() {

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Apply to Join</h1>
            <p className="text-lg text-muted-foreground">
              {"Applications are currently open! Join Munich's most dynamic finance society."}
            </p>
          </div>
          {/* Application cards for each city */}
          <ApplicationCard data={applicationDataMunich} />
          <ApplicationCard data={applicationDataHeilbronn} />
    
          {/* ... the rest like Application Process etc. */}
          {(applicationDataMunich.isActive || applicationDataHeilbronn.isActive) && (
          <div className="space-y-8">
            {/* <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>Complete the form below to apply for membership</CardDescription>
              </CardHeader>
              <CardContent className="aspect-video">
                <iframe
                  src={applicationData.googleFormUrl}
                  className="w-full h-full border-0 rounded-md"
                  title="Application Form"
                >
                  Loading application form...
                </iframe>
              </CardContent>
            </Card> */}

            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Submit Application</h3>
                    <p className="text-muted-foreground">
                      Fill out the application form with your details and experience
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Interview</h3>
                    <p className="text-muted-foreground">Selected candidates will be invited for an interview</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Decision</h3>
                    <p className="text-muted-foreground">
                      Final decisions will be communicated within two weeks after the interview
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        </div>
      </div>
      )
    }
