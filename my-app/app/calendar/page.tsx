"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths, startOfDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar as ShadCNCalendar} from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample events data - in a real app, this would come from Google Calendar API
const events = [
  {
    id: 1,
    title: "Get to know Munich FinanceCircle!",
    date: new Date(2025,  4, 17),
    time: "14:00 - 16:00",
    location: "Arcisstrasse 21, Munich",
    description: "Get to know Munich FinanceCircle and have an interesting chat with active members. ",
  },
  {
    id: 3,
    title: "Company Event: Jane Street",
    date: new Date(2025, 4, 15),
    time: "tbd",
    location: "Arcisstrasse 21, Munich",
    description: "",
  },
  {
    id: 4,
    title: "Company Event: ALAIKA",
    date: new Date(2025, 5, 11),
    time: "tbd",
    location: "Friedenstraße 22B, Munich",
    description: "",
  },
  {
    id: 5,
    title: "Company Event: KPMG Deal Advisory",
    date: new Date(2025, 5, 30),
    time: "tbd",
    location: "Friedenstraße 10, Munich",
    description: "",
  },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [filteredEvents, setFilteredEvents] = useState(events)
  // const [view, setView] = useState<"month" | "list">("month")

  const eventDates = new Set(events.map(event => format(startOfDay(event.date), "yyyy-MM-dd")))

  useEffect(() => {
    if (selectedDate) {
      const filtered = events.filter((event) => format(event.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd"))
      setFilteredEvents(filtered)
    } else {
      setFilteredEvents(events)
    }
  }, [selectedDate])

  const handlePreviousMonth = () => {
    setDate(subMonths(date, 1))
  }

  const handleNextMonth = () => {
    setDate(addMonths(date, 1))
  }

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Events Calendar</h1>
          <p className="text-lg text-muted-foreground">Stay up to date with our upcoming events and activities</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Calendar</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm font-medium">{format(date, "MMMM yyyy")}</div>
                    <Button variant="outline" size="icon" onClick={handleNextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>Select a date to view events</CardDescription>
              </CardHeader>
              <CardContent>
                <ShadCNCalendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  month={date}
                  className="rounded-md border"
                  modifiers={{
                    eventDay: (day) => eventDates.has(format(day, "yyyy-MM-dd"))
                  }}
                  modifiersClassNames={{
                    eventDay: "relative before:absolute before:top-1 before:left-1/2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full before:-translate-x-1/2"
                  }}
                  disableNavigation={true}
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    This calendar is synchronized with our Google Calendar. You can subscribe to our events by clicking
                    the button below.
                  </p>
                  <a
                    href="https://calendar.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Button className="mt-4 w-full" variant="outline">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Subscribe to Calendar
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full md:w-1/2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {selectedDate ? `Events on ${format(selectedDate, "MMMM d, yyyy")}` : "Upcoming Events"}
                  </CardTitle>
                  {/* <Select value={view} onValueChange={(value) => {
                    setView(value as "month" | "list");
                    handleViewChange(value)
                    }}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="View" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="list">List</SelectItem>
                    </SelectContent>
                  </Select> */}
                  <Button className="w-[120px]" onClick={() => setSelectedDate(undefined)}>
                      Show all
                  </Button>
                </div>
                <CardDescription>
                  {filteredEvents.length === 0
                    ? "No events scheduled for this date"
                    : `${filteredEvents.length} event${filteredEvents.length > 1 ? "s" : ""} scheduled`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEvents.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">No events found for the selected date</p>
                      <Button variant="link" onClick={() => setSelectedDate(undefined)} className="mt-2">
                        View all upcoming events
                      </Button>
                    </div>
                  ) : (
                    filteredEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{event.title}</h3>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {format(event.date, "MMM d")}
                              </span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <p className="text-sm">{event.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-muted-foreground">Location: {event.location}</span>
                              <Button variant="ghost" size="sm">
                                Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Want to propose an event or collaborate with us?</p>
          <a href="mailto:info@munichfinancecircle.de">
            <Button>Contact Us</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

