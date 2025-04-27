"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

// Sample application data
const applicationData = {
  isActive: true,
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfpf4gUKL-qg22tTpWSP6nmbGgAK2PpOKHYzho6S9N8EQ7b4g/viewform?usp=dialog",
  nextDeadline: new Date("2025-05-09T23:59:59"),
  nextApplicationPhase: new Date("2025-04-18T00:00:00"),
  applicationTime: 21
}

export default function ApplyPage() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateTimeLeft = () => {
      applicationData.isActive = applicationData.nextDeadline > applicationData.nextApplicationPhase
      const targetDate = applicationData.isActive ? applicationData.nextDeadline : applicationData.nextApplicationPhase

      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })

        // Calculate progress for active applications
        if (applicationData.isActive) {
          // Assuming a 30-day application window for this example
          const totalDuration = applicationData.applicationTime * 24 * 60 * 60 * 1000
          const elapsed = totalDuration - difference
          const progressValue = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))
          setProgress(progressValue)
        }
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Apply to Join</h1>
          <p className="text-lg text-muted-foreground">
            {applicationData.isActive
              ? "Applications are currently open! Join Munich's most dynamic finance society."
              : "Applications are currently closed. Check back soon for our next application phase."}
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>
              {applicationData.isActive ? "Time Remaining to Apply" : "Next Application Phase Opens In"}
            </CardTitle>
            <CardDescription>
              {applicationData.isActive
                ? "Don't miss the deadline to submit your application"
                : "Mark your calendar for our next application period"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center mb-6">
              <div className="bg-secondary/50 rounded-lg p-4">
                <span className="text-3xl font-bold block">{timeLeft.days}</span>
                <span className="text-sm text-muted-foreground">Days</span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <span className="text-3xl font-bold block">{timeLeft.hours}</span>
                <span className="text-sm text-muted-foreground">Hours</span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <span className="text-3xl font-bold block">{timeLeft.minutes}</span>
                <span className="text-sm text-muted-foreground">Minutes</span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <span className="text-3xl font-bold block">{timeLeft.seconds}</span>
                <span className="text-sm text-muted-foreground">Seconds</span>
              </div>
            </div>

            {applicationData.isActive && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Application Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <div className="flex items-center justify-center mt-8">
              {applicationData.isActive ? (
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfpf4gUKL-qg22tTpWSP6nmbGgAK2PpOKHYzho6S9N8EQ7b4g/viewform?usp=dialog">
                  <Button size="lg" className="rounded-full">
                    Apply Now
                  </Button>
                </Link>
              ) : (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>Applications open on {applicationData.nextApplicationPhase.toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {applicationData.isActive && (
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

