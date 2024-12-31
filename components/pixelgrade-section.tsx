import Image from "next/image"

import { Button } from "@/components/ui/button"

export function PixelgradeSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/features/frame.svg"
              alt="Pixelgrade Interface"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold leading-tight">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet ultrices dolor. Sed ut imperdiet nisi. Proin condimentum
              fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit
              mauris egestas quam, ut aliquam massa nisl quis neque.
            </p>
            <Button
              variant="default"
              className="bg-green-500 hover:bg-green-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
