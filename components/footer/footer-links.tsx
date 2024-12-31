interface FooterLinksGroupProps {
  title: string
  links: Array<{ label: string; href: string }>
}

export function FooterLinksGroup({ title, links }: FooterLinksGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
