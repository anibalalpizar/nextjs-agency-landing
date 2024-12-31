import Link from "next/link"
import { Leaf } from "lucide-react"

import { Button } from "./button"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="w-6 h-6 text-green-500" />
          <span className="text-xl font-bold">Nexcent</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm hover:text-green-500">
            Home
          </Link>
          <Link href="/features" className="text-sm hover:text-green-500">
            Features
          </Link>
          <Link href="/community" className="text-sm hover:text-green-500">
            Community
          </Link>
          <Link href="/blog" className="text-sm hover:text-green-500">
            Blog
          </Link>
          <Link href="/pricing" className="text-sm hover:text-green-500">
            Pricing
          </Link>
        </div>

        <Button className="bg-green-500 hover:bg-green-600">
          Register Now →
        </Button>
      </nav>
    </header>
  )
}
