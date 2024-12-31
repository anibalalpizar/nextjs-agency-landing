import { Leaf } from "lucide-react"

import { FooterLinksGroup } from "./footer-links"
import { NewsletterForm } from "./newsletter-form"
import { SocialLinks } from "./social-links"

export function Footer() {
  const companyLinks = [
    { label: "About us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
  ]

  const supportLinks = [
    { label: "Help center", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Status", href: "#" },
  ]

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold text-white">Nexcent</span>
            </div>
            <div className="text-gray-400">
              Copyright © 2024 Nexcent ltd.
              <br />
              All rights reserved
            </div>
            <SocialLinks />
          </div>

          <FooterLinksGroup title="Company" links={companyLinks} />
          <FooterLinksGroup title="Support" links={supportLinks} />

          <NewsletterForm />
        </div>
      </div>
    </footer>
  )
}
