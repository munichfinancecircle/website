import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">An official club of the Technical University of Munich</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Imprint</h3>
              <address className="text-sm text-muted-foreground not-italic">
                Munich FinanceCircle
                <br />
                c/o Studentische Vertretung,
                <br />
                Arcisstrasse 21,
                <br />
                80333 Munich
              </address>

              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Represented by:</h4>
                <p className="text-sm text-muted-foreground">Constantin Albrecht, President & Founder</p>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Responsible for Content:</h4>
                <p className="text-sm text-muted-foreground">Advisory Board of Vice Presidents</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground mb-4">
                <a href="mailto:info@munichfinancecircle.de" className="hover:text-primary">
                  info@munichfinancecircle.de
                </a>
              </p>

              <nav className="space-y-2">
                <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/imprint" className="block text-sm text-muted-foreground hover:text-primary">
                  Imprint
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Munich FinanceCircle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

