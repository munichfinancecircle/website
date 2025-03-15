"use client";

import { Mail, MapPin, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react";

export default function ContactPage() {
  

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      setSuccess(false);
  
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error("Failed to send email");
  
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        setError("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (

    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Get in touch with the Munich FinanceCircle team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@munichfinancecircle.de" className="text-muted-foreground hover:text-primary">
                    info@munichfinancecircle.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <address className="text-muted-foreground not-italic">
                    Munich FinanceCircle
                    <br />
                    c/o Studentische Vertretung,
                    <br />
                    Arcisstrasse 21,
                    <br />
                    80333 Munich
                  </address>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect with us on social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Linkedin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/munichfinancecircle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Munich FinanceCircle
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <a
                    href="https://www.instagram.com/munichfinancecircle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    @munichfinancecircle
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && <p className="text-green-600">Message sent successfully!</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

