import Image from "next/image"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Lessons and insights
              <span className="block text-green-500">from 8 years</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Register
            </Button>
          </div>

          <div className="flex-1 max-w-xl">
            <Image
              src="/images/hero/Illustration.svg"
              alt="Hero Illustration"
              width={600}
              height={500}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
