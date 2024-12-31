import Image from "next/image"

import { Button } from "@/components/ui/button"
import { CustomerStats } from "./customer-stats"
import { ClientLogos } from "./client-logos"

export function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <CustomerStats />

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/tesla/tesla.svg"
              alt="Tesla Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit ligula molestie, nec molestie mi blandit. Suspendisse cursus
              tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem in turpis vestibulum ornare. Suspendisse
              pretium, est et mattis elementum, enim sapien.
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Tim Smith</h4>
              <p className="text-muted-foreground">
                British Dragon Boat Racing Association
              </p>
            </div>

            <div className="pt-6">
              <ClientLogos />
              <Button
                variant="link"
                className="text-green-500 hover:text-green-600 pl-0"
              >
                Meet all customers →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
