import Image from "next/image"
import Link from "next/link"

interface MarketingCardProps {
  image: string
  title: string
  link: string
}

function MarketingCard({ image, title, link }: MarketingCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <Link
          href={link}
          className="text-green-500 hover:text-green-600 inline-flex items-center gap-2"
        >
          Readmore <span>→</span>
        </Link>
      </div>
    </div>
  )
}

export function MarketingSection() {
  const marketingCards = [
    {
      image: "/images/newMarketing/creating-streamlined.svg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "#",
    },
    {
      image: "/images/newMarketing/safeguarding.svg",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      image: "/images/newMarketing/membership.svg",
      title: "Revamping the Membership Model with Triathlon Australia",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketingCards.map((card, index) => (
            <MarketingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
