import { Instagram, Twitter, Youtube } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <a
            key={index}
            href={social.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon className="w-5 h-5" />
          </a>
        )
      })}
    </div>
  )
}
