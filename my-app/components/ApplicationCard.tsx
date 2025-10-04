import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type ApplicationData = {
    city: string;
    isActive: boolean;
    googleFormUrl: string;
    nextDeadline: Date;
    nextApplicationPhase: Date;
    applicationTime: number; // in days
  };
  

    export default function ApplicationCard({ data }: { data: ApplicationData }) {
        const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        const [progress, setProgress] = useState(0)
    
        useEffect(() => {
        const calculateTimeLeft = () => {
            const isActive = data.nextDeadline > new Date() && data.nextApplicationPhase < new Date()
            data.isActive = data.nextDeadline > new Date() && data.nextApplicationPhase < new Date()
            const targetDate = isActive ? data.nextDeadline : data.nextApplicationPhase
    
            const difference = targetDate.getTime() - new Date().getTime()
    
            if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((difference / (1000 * 60)) % 60)
            const seconds = Math.floor((difference / 1000) % 60)
    
            setTimeLeft({ days, hours, minutes, seconds })
    
            if (isActive) {
                const totalDuration = data.applicationTime * 24 * 60 * 60 * 1000
                const elapsed = totalDuration - difference
                const progressValue = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))
                setProgress(progressValue)
            }
            }
        }
  
      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)
  
      return () => clearInterval(timer)
    }, [data])
  
    return (
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>
            {data.isActive ? `Time Remaining to Apply to the ${data.city} Team` : `Next Application Phase For ${data.city} Opens In`}
          </CardTitle>
          <CardDescription>
            {data.isActive
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
  
          {data.isActive && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Application Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
  
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-6 w-full max-w-2xl mx-auto">
            {data.isActive ? (
              <Link className="w-full sm:w-auto flex-1" href={data.googleFormUrl}>
                <Button className="h-12 rounded-full w-full text-lg">
                    Apply Now ({data.city})
                </Button>
              </Link>
            ) : (
              <div className="flex justify-center">
              <div className="flex items-center gap-2 text-muted-foreground w-full sm:w-auto flex-1">
                <Calendar className="h-5 w-5" />
                <span>Applications open on {data.nextApplicationPhase.toLocaleDateString()}</span>
              </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
  